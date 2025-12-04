// src/app/pages/home/home.component.ts
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { ConfigService } from '../../services/config.service';
import { Subscription } from 'rxjs';

// Import components
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { TableOfContentsComponent } from './components/table-of-contents/table-of-contents.component';
import { ContentSectionComponent } from './components/content-section/content-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    TableOfContentsComponent,
    ContentSectionComponent
  ],
  template: `
    <!-- Hero Section -->
    <app-hero-section 
        [appInfo]="appInfo"
        [heroContent]="heroContent"
        (register)="navigateToRegister()"
        (imageError)="onImageError($event)">
    </app-hero-section>

    <!-- Main Content -->
    <div class="w-full px-4 py-12">
        <div class="mx-auto max-w-7xl">
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <!-- Table of Contents Sidebar - Fixed width -->
            <div class="lg:w-72 xl:w-80 flex-shrink-0"> <!-- Fixed width, won't grow -->
            <app-table-of-contents 
                [sections]="tableOfContents"
                (sectionClick)="onSectionClick($event)">
            </app-table-of-contents>
            </div>

            <!-- Main Article - Takes remaining space -->
            <div class="flex-1 min-w-0"> <!-- flex-1 makes it take available space, min-w-0 prevents overflow -->
            <app-content-section 
                [appInfo]="appInfo"
                [sectionsData]="contentSections"
                (register)="navigateToRegister()"
                (scrollToSection)="scrollToSection(null, $event)"
                (imageError)="onImageError($event)">
            </app-content-section>
            </div>
        </div>
        </div>
    </div>

    <!-- Structured Data -->
    <script type="application/ld+json">
        {{ getStructuredData() | json }}
    </script>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  private configSubscription?: Subscription;
  
  // Data from config
  appInfo: any = {};
  heroContent: any = {};
  tableOfContents: Array<{title: string, id: string}> = [];
  contentSections: any = {};

  constructor(
    private seoService: SeoService,
    private configService: ConfigService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.configSubscription = this.configService.loadConfig().subscribe({
      next: (config) => {
        this.loadConfigData(config);
        this.seoService.setPageSeo('home');
        if (isPlatformBrowser(this.platformId)) {
          this.handleInitialHash();
        }
      },
      error: (error) => {
        console.warn('Failed to load config, using defaults:', error);
        this.loadDefaultData();
        this.seoService.setPageSeo('home');
        if (isPlatformBrowser(this.platformId)) {
          this.handleInitialHash();
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.configSubscription?.unsubscribe();
  }

  private handleInitialHash(): void {
    if (isPlatformBrowser(this.platformId)) {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => {
          this.scrollToSection(null, hash);
        }, 100);
      }
    }
  }

  private loadConfigData(config: any): void {
    this.appInfo = config.app || {};
    this.heroContent = config.content?.hero || {};
    
    // Handle table of contents
    const tocConfig = config.navigation?.tableOfContents || [];
    if (tocConfig.length > 0) {
      if (typeof tocConfig[0] === 'string') {
        this.tableOfContents = (tocConfig as string[]).map(title => ({
          title,
          id: this.generateSectionId(title)
        }));
      } else {
        this.tableOfContents = tocConfig as Array<{title: string, id: string}>;
      }
    } else {
      this.createDefaultTableOfContents();
    }

    // Load content sections data
    this.contentSections = {
      registrationSteps: config.content?.registrationSteps || [],
      features: config.content?.features || [],
      gameCategories: config.content?.gameCategories || [],
      earningStrategies: config.content?.earningStrategies || this.getDefaultEarningStrategies(),
      proTips: config.content?.proTips || [],
      pros: config.content?.pros || [],
      cons: config.content?.cons || [],
      faqs: config.content?.faqs || [],
      reviews: config.content?.reviews || {},
      links: config.links || {}
    };
  }

  private getDefaultEarningStrategies() {
    return [
      {
        title: 'Referral Commission Mastery',
        description: 'Earn 6% commission on every deposit made by your referred users.',
        earningPotential: 'PKR 15,000+ Monthly',
        difficulty: 'Easy'
      },
      {
        title: 'Color Prediction Pro Strategy',
        description: 'Master the color prediction algorithm with our proven betting patterns.',
        earningPotential: 'PKR 1,000+ Daily',
        difficulty: 'Medium'
      },
      {
        title: 'Agent Network Building',
        description: 'Recruit sub-agents and earn additional 2% commission on their network.',
        earningPotential: 'PKR 30,000+ Monthly',
        difficulty: 'Hard'
      },
      {
        title: 'Daily Bonus Optimization',
        description: 'Maximize daily login, attendance, and game completion bonuses.',
        earningPotential: 'PKR 500+ Daily',
        difficulty: 'Easy'
      },
      {
        title: 'Weekly Tournament Domination',
        description: 'Compete in weekly tournaments for massive cash prizes.',
        earningPotential: 'PKR 5,000+ Weekly',
        difficulty: 'Medium'
      },
      {
        title: 'VIP Level Advancement',
        description: 'Advance through VIP levels for higher commission rates.',
        earningPotential: 'PKR 20,000+ Monthly',
        difficulty: 'Medium'
      }
    ];
  }

  private createDefaultTableOfContents(): void {
    this.tableOfContents = [
      { title: 'What is 92 PAK Game? Complete Overview', id: 'what-is-92pak-game' },
      { title: 'Premium Features of 92 PAK Real Earning App', id: 'premium-features' },
      { title: 'How to Start Earning in 3 Minutes: Complete Registration Guide', id: 'how-to-register-92pak-game' },
      { title: 'Top Game Categories for Maximum Earnings', id: 'game-categories' },
      { title: 'Advanced Earning Strategies: Partner Rewards Program', id: 'advanced-earning-strategies' },
      { title: 'Expert Tips to Maximize Your 92 PAK Game Earnings', id: 'expert-tips' },
      { title: 'Comprehensive Analysis: Pros and Cons', id: 'pros-cons' },
      { title: 'Authentic User Reviews and Testimonials', id: 'user-reviews' },
      { title: 'Frequently Asked Questions (FAQ)', id: 'faq' }
    ];
  }

  private generateSectionId(title: string): string {
    return title.toLowerCase()
      .replace(/92 pak game/gi, '92pak-game')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  }

  private loadDefaultData(): void {
    this.appInfo = this.configService.getAppInfo();
    this.heroContent = this.configService.getContent().hero;
    this.createDefaultTableOfContents();
    
    this.contentSections = {
      registrationSteps: this.configService.getContent().registrationSteps,
      features: this.configService.getContent().features,
      gameCategories: this.configService.getContent().gameCategories,
      earningStrategies: this.getDefaultEarningStrategies(),
      proTips: this.configService.getContent().proTips,
      pros: this.configService.getContent().pros,
      cons: this.configService.getContent().cons,
      faqs: this.configService.getContent().faqs,
      reviews: this.configService.getContent().reviews,
      links: this.configService.getLinks()
    };
  }

  scrollToSection(event: Event | null, sectionId: string): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    if (!isPlatformBrowser(this.platformId)) return;

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      history.replaceState(null, '', window.location.pathname + '#' + sectionId);
    }
  }

  navigateToRegister(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const links = this.contentSections.links;
    if (links?.register && links.register !== '#') {
      window.open(links.register, '_blank', 'noopener,noreferrer');
    } else if (links?.download?.android && links.download.android !== '#') {
      window.open(links.download.android, '_blank', 'noopener,noreferrer');
    }
  }

  onSectionClick(eventData: { event: Event, sectionId: string }): void {
    this.scrollToSection(eventData.event, eventData.sectionId);
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    
    const parent = img.parentElement;
    if (parent) {
      const fallback = parent.querySelector('[class*="fallback"]') as HTMLElement;
      if (fallback) {
        fallback.style.display = 'flex';
      }
    }
  }

  getStructuredData() {
    const registrationSteps = this.contentSections.registrationSteps || [];
    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": `How to Register and Earn Money with ${this.appInfo?.name || '92 PAK Game'} in Pakistan 2025`,
      "description": "Complete step-by-step guide to download APK, register account, deposit money and start earning real cash",
      "totalTime": "PT3M",
      "step": registrationSteps.map((step: any, index: number) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.title,
        "text": step.description
      }))
    };
  }
}