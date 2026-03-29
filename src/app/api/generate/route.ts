// src/app/api/generate/route.ts
import { NextRequest, NextResponse } from "next/server";
import type { ClientBrief, GeneratedContent } from "@/types/portal";

export async function POST(req: NextRequest) {
  try {
    const brief: ClientBrief = await req.json();

    const prompt = buildPrompt(brief);

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY!,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-opus-4-5",
        max_tokens: 8000,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Anthropic API error:", error);
      return NextResponse.json(
        { error: "Failed to generate content" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const rawText = data.content[0]?.text ?? "";

    // Strip any markdown code fences before parsing
    const clean = rawText
      .replace(/```json\s*/gi, "")
      .replace(/```\s*/g, "")
      .trim();

    let generated: Partial<GeneratedContent>;
    try {
      generated = JSON.parse(clean);
    } catch {
      console.error("JSON parse failed. Raw output:", rawText);
      return NextResponse.json(
        { error: "Failed to parse generated content. Please try again." },
        { status: 500 }
      );
    }

    const result: GeneratedContent = {
      brief,
      generatedAt: new Date().toISOString(),
      ...generated,
    };

    return NextResponse.json(result);
  } catch (err) {
    console.error("Generate route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function buildPrompt(brief: ClientBrief): string {
  const contentRequests: string[] = [];

  if (brief.contentTypes.includes("video_scripts")) {
    contentRequests.push(`
"scripts": [
  // Generate 5 video scripts. Each must have:
  // - A scroll-stopping hook (first 3 seconds)
  // - A punchy body (the value)
  // - A clear CTA
  // - Platform: one of ${brief.platforms.join(", ")}
  // - Duration: "15-30s" or "30-60s"
  // Format per script:
  {
    "title": "string",
    "hook": "string",
    "body": "string",
    "cta": "string",
    "platform": "string",
    "duration": "string"
  }
]`);
  }

  if (brief.contentTypes.includes("ad_copy")) {
    contentRequests.push(`
"adCopy": [
  // Generate 4 ad copy variants across platforms.
  // Format per ad:
  {
    "platform": "Meta Ads" | "Google Ads",
    "headline": "string (max 40 chars for Google, 45 for Meta)",
    "primaryText": "string (125 chars for Meta, longer for Google)",
    "description": "string",
    "cta": "string"
  }
]`);
  }

  if (brief.contentTypes.includes("email_sequence")) {
    contentRequests.push(`
"emails": [
  // Generate a 5-email welcome/nurture sequence.
  // Email 1: Welcome, Email 2: Problem/pain, Email 3: Solution, Email 4: Social proof, Email 5: Offer/CTA
  {
    "sequencePosition": number,
    "purpose": "string",
    "subject": "string",
    "preview": "string (preview text, 90 chars)",
    "body": "string (full email body, conversational)",
    "cta": "string"
  }
]`);
  }

  if (brief.contentTypes.includes("seo_outline")) {
    contentRequests.push(`
"seoOutline": {
  "title": "string (SEO optimised H1)",
  "metaDescription": "string (155 chars max)",
  "targetKeyword": "string",
  "wordCount": "string (e.g. '1,500-2,000 words')",
  "sections": [
    {
      "heading": "string (H2 or H3)",
      "notes": "string (what to cover in this section)"
    }
    // Include 6-8 sections
  ]
}`);
  }

  if (brief.contentTypes.includes("social_captions")) {
    contentRequests.push(`
"captions": [
  // Generate 5 social media captions, one per platform where relevant.
  {
    "platform": "Instagram" | "TikTok" | "Facebook" | "LinkedIn" | "YouTube",
    "caption": "string (platform-appropriate length and style)",
    "hashtags": ["string"],
    "bestPostTime": "string (e.g. 'Tuesday 7-9pm AEST')"
  }
]`);
  }

  return `You are an expert AI marketing copywriter for ScaleUpward, an AI-powered marketing agency.

Generate high-converting marketing content for the following client brief. Return ONLY a valid JSON object with no markdown, no preamble, no explanation — just raw JSON.

CLIENT BRIEF:
- Business: ${brief.businessName}
- Product/Service: ${brief.productOrService}
- Target Audience: ${brief.targetAudience}
- Unique Value Proposition: ${brief.uniqueValueProp}
- Tone: ${brief.tone}
- Key Message: ${brief.keyMessage || "Not specified — infer from the brief"}
- Call to Action: ${brief.callToAction || "Shop now / Learn more"}
- Competitors: ${brief.competitors || "Not specified"}
- Platforms: ${brief.platforms.join(", ")}

Generate the following content types. Return them as a single JSON object with these exact keys:

{
  ${contentRequests.join(",\n  ")}
}

Rules:
- Every piece of content must be specific to ${brief.businessName} — no generic filler
- Match the tone exactly: ${brief.tone}
- Hooks must stop the scroll in the first 3 seconds
- CTAs must be direct and urgent
- Return ONLY the JSON object. No markdown. No backticks. No explanation.`;
}
