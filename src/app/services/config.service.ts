// src/app/services/config.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { AppConfig, SEOConfig } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: AppConfig = this.getDefaultConfig();
  private seoConfig: SEOConfig = this.config.seo;

  constructor(private http: HttpClient) {}

  loadConfig(): Observable<AppConfig> {
    return this.http.get<AppConfig>('/assets/config/app-config.json').pipe(
      tap(config => {
        this.config = config;
        this.seoConfig = config.seo;
      })
    );
  }

  private getDefaultConfig(): AppConfig {
    const baseUrl = 'https://92pakworld.net';

    return {
      seo: {
        default: {
          title: '92 PAK Game - Real Money Earning App',
          description: 'Top earning app in Pakistan',
          keywords: 'earning app, real money, Pakistan',
          type: 'website',
          image: '/assets/images/og-image.webp',
          siteName: '92 PAK Game',
          twitterHandle: '@92pakgame'
        },
        pages: {
          'home': {
            title: '92 PAK Game - New Earning App in Pakistan 2025',
            description: 'Download 92 PAK Game - Play and earn real money in Pakistan through exciting games and rewards.',
            keywords: '92 PAK Game, earning app Pakistan, money making game, mobile game earnings',
            canonical: `${baseUrl}/`
          },
          'about': {
            title: 'About 92 PAK Game - Real Money Earning Platform',
            description: 'Learn about 92 PAK Game mission, features, and commitment to providing secure gaming experiences in Pakistan.',
            keywords: 'about 92 PAK Game, company mission, gaming platform',
            canonical: `${baseUrl}/about-us`
          },
          'privacy': {
            title: 'Privacy Policy - 92 PAK Game',
            description: 'Read our Privacy Policy to understand how we collect, use, and protect your personal information.',
            keywords: 'privacy policy, data protection, user privacy',
            canonical: `${baseUrl}/privacy-policy`
          },
          'terms': {
            title: 'Terms and Conditions - 92 PAK Game',
            description: 'Review the Terms and Conditions for using 92 PAK Game real money earning platform.',
            keywords: 'terms and conditions, user agreement, legal terms',
            canonical: `${baseUrl}/terms-and-conditions`
          },
          'disclaimer': {
            title: 'Disclaimer - 92 PAK Game',
            description: 'Important legal disclaimer for 92 PAK Game real money gaming platform.',
            keywords: 'disclaimer, legal disclaimer, gaming risks',
            canonical: `${baseUrl}/disclaimer`
          },
          'contact': {
            title: 'Contact Us - 92 PAK Game Support',
            description: 'Get in touch with 92 PAK Game customer support team for assistance and inquiries.',
            keywords: 'contact us, customer support, help center',
            canonical: `${baseUrl}/contact-us`
          }
        }
      },
      app: {
        name: '92PAK',
        developer: '92pak.com.pk',
        version: '2.0.0',
        size: '27 MB',
        category: 'Color Prediction Game & Lottery',
        minDeposit: 'Rs 300',
        minWithdraw: 'Rs 500',
        supportedPayments: ['JazzCash', 'Easypaisa', 'USDT'],
        supportedLanguages: ['Urdu', 'English']
      },
      links: {},
      content: {
        hero: {
          title: '92 PAK Game',
          subtitle: '#1 Real Money Earning App in Pakistan',
          description: 'Transform your smartphone into a powerful income source.',
          ctaButton: 'Register/Login'
        },
        registrationSteps: [],
        features: [],
        gameCategories: [],
        earningStrategies: [],
        proTips: [],
        pros: [],
        cons: [],
        faqs: [],
        reviews: {
          personal: '',
          user: { text: '', author: '' }
        }
      },
      navigation: {},
      contact: {},
      footer: {}
    };
  }

  // Get full config
  getConfig(): AppConfig {
    return this.config;
  }

  // Get SEO config
  getSeoConfig(page: string = 'home'): any {
    const baseUrl = 'https://92pakworld.net';
    const seoConfig = this.config.seo;
    
    // If config doesn't have SEO, use default
    if (!seoConfig) {
      const defaultConfig = this.getDefaultConfig();
      return {
        ...defaultConfig.seo.default,
        canonical: this.getDefaultCanonicalUrl(page)
      };
    }
    
    // Merge page-specific config with defaults
    if (seoConfig.pages && seoConfig.pages[page]) {
      const pageConfig = seoConfig.pages[page];
      
      // Ensure canonical exists
      const canonical = pageConfig.canonical || this.getDefaultCanonicalUrl(page);
      
      return {
        ...seoConfig.default,
        ...pageConfig,
        canonical: canonical  // Ensure canonical is always set
      };
    }
    
    // Return default with base URL canonical
    return {
      ...seoConfig.default,
      canonical: `${baseUrl}/`
    };
  }

  // Existing methods with proper return types
  getAppInfo() {
    return this.config.app;
  }

  getContent() {
    return this.config.content;
  }

  getLinks() {
    return this.config.links;
  }

  getNavigation() {
    return this.config.navigation;
  }

  getFooter() {
    return this.config.footer;
  }

  getContact() {
    return this.config.contact;
  }

  // Helper method to get stars for difficulty
  getStars(difficulty: string): string[] {
    switch(difficulty) {
      case 'Easy': return ['full', 'empty', 'empty'];
      case 'Medium': return ['full', 'full', 'empty'];
      case 'Hard': return ['full', 'full', 'full'];
      default: return ['full', 'empty', 'empty'];
    }
  }

  private getDefaultCanonicalUrl(page: string): string {
    const baseUrl = 'https://92pakworld.net';
    const canonicalMap: Record<string, string> = {
      'home': `${baseUrl}/`,
      'about': `${baseUrl}/about-us`,
      'privacy': `${baseUrl}/privacy-policy`,
      'terms': `${baseUrl}/terms-and-conditions`,
      'disclaimer': `${baseUrl}/disclaimer`,
      'contact': `${baseUrl}/contact-us`
    };
    
    return canonicalMap[page] || `${baseUrl}/`;
}
}