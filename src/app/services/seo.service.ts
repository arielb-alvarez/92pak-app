// src/app/services/seo.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { ConfigService } from './config.service';

export type PageType = 'home' | 'about' | 'privacy' | 'terms' | 'disclaimer' | 'contact';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseUrl = 'https://92pakworld.net';
  
  constructor(
    private meta: Meta,
    private title: Title,
    private configService: ConfigService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  setPageSeo(page: PageType = 'home'): void {
    const seoConfig = this.configService.getSeoConfig(page);
    
    // Get the canonical URL from the config
    const canonicalUrl = seoConfig.canonical || `${this.baseUrl}/`;
    
    // Set title
    const title = seoConfig.title || '92 PAK Game - Real Money Earning App';
    this.title.setTitle(title);
    
    // Set meta tags
    this.meta.updateTag({ name: 'description', content: seoConfig.description || '' });
    this.meta.updateTag({ name: 'keywords', content: seoConfig.keywords || '' });
    
    // Set canonical URL - using DOM manipulation
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
    // Find existing canonical link
    let canonicalLink = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (canonicalLink) {
      // Update existing canonical link
      canonicalLink.setAttribute('href', url);
    } else {
      // Create new canonical link
      canonicalLink = this.document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', url);
      this.document.head.appendChild(canonicalLink);
    }
  }
}