// src/types/portal.ts

export type Platform = "tiktok" | "instagram" | "youtube" | "facebook" | "meta_ads" | "google_ads";
export type Tone = "punchy" | "educational" | "casual" | "professional" | "funny";
export type ContentType = "video_scripts" | "ad_copy" | "email_sequence" | "seo_outline" | "social_captions";

export interface ClientBrief {
  // Business
  businessName: string;
  productOrService: string;
  targetAudience: string;
  uniqueValueProp: string;
  // Content
  contentTypes: ContentType[];
  platforms: Platform[];
  tone: Tone;
  // Optional
  competitors?: string;
  keyMessage?: string;
  callToAction?: string;
}

export interface GeneratedScript {
  title: string;
  hook: string;
  body: string;
  cta: string;
  platform: string;
  duration: string;
}

export interface GeneratedAdCopy {
  platform: string;
  headline: string;
  primaryText: string;
  description: string;
  cta: string;
}

export interface GeneratedEmail {
  subject: string;
  preview: string;
  body: string;
  cta: string;
  sequencePosition: number;
  purpose: string;
}

export interface GeneratedSeoOutline {
  title: string;
  metaDescription: string;
  targetKeyword: string;
  sections: {
    heading: string;
    notes: string;
  }[];
  wordCount: string;
}

export interface GeneratedCaption {
  platform: string;
  caption: string;
  hashtags: string[];
  bestPostTime: string;
}

export interface GeneratedContent {
  brief: ClientBrief;
  scripts?: GeneratedScript[];
  adCopy?: GeneratedAdCopy[];
  emails?: GeneratedEmail[];
  seoOutline?: GeneratedSeoOutline;
  captions?: GeneratedCaption[];
  generatedAt: string;
}
