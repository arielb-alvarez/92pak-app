// src/app/services/seo.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { ConfigService } from './config.service';

export type PageType = 'home' | 'about' | 'privacy' | 'terms' | 'disclaimer' | 'contact';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseUrl = 'https://92pakworld.net';
  
  private canonicalUrls: Record<PageType, string> = {
    'home': `${this.baseUrl}/`,
    'about': `${this.baseUrl}/about-us`,
    'privacy': `${this.baseUrl}/privacy-policy`,
    'terms': `${this.baseUrl}/terms-and-conditions`,
    'disclaimer': `${this.baseUrl}/disclaimer`,
    'contact': `${this.baseUrl}/contact-us`
  };

  constructor(
    private meta: Meta,
    private title: Title,
    private configService: ConfigService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  setPageSeo(page: PageType = 'home'): void {
    const seoConfig = this.configService.getSeoConfig(page);
    
    // Set title
    const title = seoConfig.title || '92 PAK Game - Real Money Earning App';
    this.title.setTitle(title);
    
    // Set meta tags
    this.meta.updateTag({ name: 'description', content: seoConfig.description || '' });
    this.meta.updateTag({ name: 'keywords', content: seoConfig.keywords || '' });
    
    // Set canonical URL - only in browser
    const canonicalUrl = this.canonicalUrls[page] || `${this.baseUrl}/`;
    
    // Use Angular Meta service which is SSR-safe
    this.updateCanonicalUrl(canonicalUrl);
    
    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: seoConfig.description || '' });
    this.meta.updateTag({ property: 'og:type', content: seoConfig.type || 'website' });
    this.meta.updateTag({ property: 'og:image', content: seoConfig.image || '/assets/images/og-image.webp' });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    
    // Twitter tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: seoConfig.description || '' });
    this.meta.updateTag({ name: 'twitter:image', content: seoConfig.image || '/assets/images/og-image.webp' });
    
    if (seoConfig.twitterHandle) {
      this.meta.updateTag({ name: 'twitter:site', content: seoConfig.twitterHandle });
    }
  }

  updateCanonicalUrl(url: string): void {
    // Check if we're in a browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Remove existing canonical tag
      const existingCanonical = this.meta.getTag('rel="canonical"');
      if (existingCanonical) {
        this.meta.removeTagElement(existingCanonical);
      }
      
      // Add new canonical tag
      this.meta.addTag({ rel: 'canonical', href: url });
    } else {
      // For SSR, use updateTag which doesn't require document
      this.meta.updateTag({ rel: 'canonical', href: url });
    }
  }
}