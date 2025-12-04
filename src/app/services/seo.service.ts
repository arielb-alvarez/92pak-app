// src/app/services/seo.service.ts
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title,
    private configService: ConfigService
  ) {}

  setPageSeo(page: string = 'home'): void {
    // Get SEO config from config service
    const seoConfig = this.configService.getSeoConfig(page);
    
    // Set title
    const title = seoConfig.title || '92 PAK Game - Real Money Earning App';
    this.title.setTitle(title);
    
    // Set meta tags
    this.meta.updateTag({ name: 'description', content: seoConfig.description || '' });
    this.meta.updateTag({ name: 'keywords', content: seoConfig.keywords || '' });
    
    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: seoConfig.description || '' });
    this.meta.updateTag({ property: 'og:type', content: seoConfig.type || 'website' });
    this.meta.updateTag({ property: 'og:image', content: seoConfig.image || '/assets/images/og-image.webp' });
    this.meta.updateTag({ property: 'og:site_name', content: seoConfig.siteName || '92 PAK Game' });
    
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
    // Remove existing canonical tag
    const existingCanonical = this.meta.getTag('rel="canonical"');
    if (existingCanonical) {
      this.meta.removeTagElement(existingCanonical);
    }
    
    // Add new canonical tag
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }
}