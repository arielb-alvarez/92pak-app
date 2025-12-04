// src/app/models/config.model.ts
export interface SEOConfig {
  default: {
    title: string;
    description: string;
    keywords: string;
    type: string;
    image: string;
    siteName: string;
    twitterHandle?: string;
  };
  pages: {
    [key: string]: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

export interface AppInfo {
  name: string;
  developer: string;
  version: string;
  size: string;
  category: string;
  minDeposit: string;
  minWithdraw: string;
  supportedPayments: string[];
  supportedLanguages: string[];
}

export interface Content {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaButton: string;
  };
  registrationSteps: Array<{
    title: string;
    description: string;
    tips?: string;
  }>;
  features: Array<{
    title: string;
    description: string;
  }>;
  gameCategories: Array<{
    name: string;
    description: string;
    games: string[];
  }>;
  earningStrategies: Array<{
    title: string;
    description: string;
    icon: string;
    earningPotential: string;
    difficulty: string;
    tip?: string;
  }>;
  proTips: string[];
  pros: string[];
  cons: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  reviews: {
    personal: string;
    user: {
      text: string;
      author: string;
    };
  };
}

export interface AppConfig {
  seo: SEOConfig;
  app: AppInfo;
  links: any;
  content: Content;
  navigation: any;
  contact: any;
  footer: any;
}