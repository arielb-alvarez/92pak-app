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
        pages: {}
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
  getSeoConfig(page?: string): any {
    // If no page specified, return default
    if (!page) {
      return this.seoConfig.default;
    }

    // Try to get page-specific SEO
    if (this.seoConfig.pages && this.seoConfig.pages[page]) {
      return this.seoConfig.pages[page];
    }
    
    // Fallback to default
    return this.seoConfig.default;
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
}