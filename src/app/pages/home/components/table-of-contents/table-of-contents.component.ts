// src/app/pages/home/components/table-of-contents/table-of-contents.component.ts
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-table-of-contents',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sticky top-24 lg:top-32" 
         [class.fixed-toc]="isFixed" 
         [style.top.px]="isFixed ? fixedTopPosition : null"
         [style.width.px]="isFixed ? containerWidth : null">
      <div class="gradient-card p-3 md:p-4 rounded-xl border border-[#06e9bb]/10 bg-gradient-to-b from-[#110d28]/50 to-[#110d28]/30 backdrop-blur-sm w-full transition-all duration-300"
           [class.shadow-xl]="isFixed"
           [class.border-[#06e9bb]/30]="isFixed"
           [class.scale-[0.98]]="isFixed">
        
        <!-- Compact Header -->
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-[#06e9bb]/10">
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-[#06e9bb] animate-pulse"></div>
            <h3 class="font-medium text-xs uppercase tracking-wider text-[#06e9bb]">
              Contents
            </h3>
          </div>
          
          <!-- Small Progress Circle -->
          <div class="relative w-6 h-6">
            <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15" fill="none" class="stroke-[#06e9bb]/10" stroke-width="1.5"/>
              <circle cx="18" cy="18" r="15" fill="none" class="stroke-[#06e9bb]" stroke-width="1.5" 
                      stroke-dasharray="100" [style.stroke-dashoffset]="100 - scrollProgress"/>
            </svg>
            <span class="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#06e9bb]">
              {{scrollProgress}}
            </span>
          </div>
        </div>

        <!-- Compact Sections List -->
        <nav class="space-y-0.5">
          @for (item of sections; track item.id; let i = $index) {
            <a 
              [href]="'#' + item.id" 
              class="block relative pl-2.5 py-1.5 rounded-lg transition-all duration-150 group"
              [class.bg-[#06e9bb]/5]="activeSectionId === item.id"
              [class.border-l]="activeSectionId === item.id"
              [class.border-[#06e9bb]]="activeSectionId === item.id"
              (click)="onSectionClick($event, item.id)"
            >
              <div class="flex items-start gap-2">
                <!-- Minimal Dot -->
                <div class="flex-shrink-0 mt-1.5">
                  <div class="w-1 h-1 rounded-full transition-all duration-200"
                       [class.bg-[#06e9bb]]="activeSectionId === item.id"
                       [class.bg-gray-500]="activeSectionId !== item.id"
                       [class.group-hover:bg-[#06e9bb]]="activeSectionId !== item.id"
                       [class.group-hover:scale-110]="activeSectionId !== item.id">
                  </div>
                </div>
                
                <!-- Compact Section Title -->
                <div class="flex-1 min-w-0">
                  <span class="text-xs text-gray-400 group-hover:text-white transition-colors duration-150 line-clamp-2 leading-tight"
                        [class.text-white]="activeSectionId === item.id"
                        [class.font-medium]="activeSectionId === item.id">
                    {{item.title}}
                  </span>
                </div>
              </div>
            </a>
          }
        </nav>

        <!-- Small Fixed State Indicator -->
        <div class="mt-3 pt-2 border-t border-[#06e9bb]/10" *ngIf="isFixed">
          <div class="flex items-center justify-between text-[10px]">
            <span class="text-gray-500 flex items-center gap-1">
              <svg class="w-2.5 h-2.5 text-[#06e9bb]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Pinned
            </span>
            <button class="text-[#06e9bb] hover:text-white transition-colors flex items-center gap-0.5 group"
                    (click)="scrollToTop()">
              <span class="text-[10px]">Top</span>
              <svg class="w-2.5 h-2.5 transform group-hover:-translate-y-0.5 transition-transform" 
                   fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    .fixed-toc {
      position: fixed;
      z-index: 40;
      animation: slideDown 0.3s ease-out;
      max-height: calc(100vh - 140px) !important;
      overflow-y: auto;
    }
    
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Custom scrollbar for fixed TOC */
    .fixed-toc::-webkit-scrollbar {
      width: 1px;
    }
    
    .fixed-toc::-webkit-scrollbar-track {
      background: transparent;
    }
    
    .fixed-toc::-webkit-scrollbar-thumb {
      background: rgba(6, 233, 187, 0.1);
      border-radius: 1px;
    }
    
    .fixed-toc::-webkit-scrollbar-thumb:hover {
      background: rgba(6, 233, 187, 0.2);
    }

    /* Responsive styles for TOC */
    @media (max-width: 1023px) {
      .fixed-toc {
        position: static !important;
        width: 100% !important;
        top: auto !important;
        max-height: none !important;
      }
    }
  `]
})
export class TableOfContentsComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sections: Array<{title: string, id: string}> = [];
  @Output() sectionClick = new EventEmitter<{event: Event, sectionId: string}>();
  
  activeSectionId: string = '';
  scrollProgress: number = 0;
  isFixed: boolean = false;
  containerWidth: number = 0;
  fixedTopPosition: number = 100;
  
  private scrollListener: any;
  private resizeListener: any;
  private initialOffsetTop: number = 0;
  private readonly mobileBreakpoint: number = 1024;
  private resizeTimer: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollListener();
      this.setupResizeListener();
      this.updateActiveSection();
      this.calculateHeaderHeight();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.calculateInitialPosition();
        this.calculateContainerWidth();
      }, 100);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.scrollListener) {
        window.removeEventListener('scroll', this.scrollListener);
      }
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
      }
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateScrollProgress();
      this.updateActiveSection();
      this.updateFixedState();
    }
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.calculateInitialPosition();
        this.calculateContainerWidth();
        this.calculateHeaderHeight();
        this.updateFixedState();
      }, 150);
    }
  }

  private calculateHeaderHeight(): void {
    if (isPlatformBrowser(this.platformId)) {
      const header = document.querySelector('app-header');
      if (header) {
        const headerRect = header.getBoundingClientRect();
        this.fixedTopPosition = headerRect.height + 16;
      }
    }
  }

  private calculateContainerWidth(): void {
    const container = this.elementRef.nativeElement.querySelector('.sticky > div');
    if (container) {
      this.containerWidth = container.getBoundingClientRect().width;
    }
  }

  private calculateInitialPosition(): void {
    const element = this.elementRef.nativeElement.querySelector('.sticky');
    if (element) {
      const rect = element.getBoundingClientRect();
      this.initialOffsetTop = rect.top + window.pageYOffset;
    }
  }

  private setupScrollListener(): void {
    this.scrollListener = () => {
      this.updateScrollProgress();
      this.updateActiveSection();
      this.updateFixedState();
    };
    window.addEventListener('scroll', this.scrollListener);
  }

  private setupResizeListener(): void {
    this.resizeListener = () => {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.calculateInitialPosition();
        this.calculateContainerWidth();
        this.calculateHeaderHeight();
        this.updateFixedState();
      }, 150);
    };
    window.addEventListener('resize', this.resizeListener);
  }

  private updateScrollProgress(): void {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = height > 0 ? Math.round((winScroll / height) * 100) : 0;
  }

  private updateFixedState(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowWidth = window.innerWidth;
      
      if (windowWidth >= this.mobileBreakpoint) {
        const shouldBeFixed = scrollY > this.initialOffsetTop - this.fixedTopPosition;
        
        if (shouldBeFixed !== this.isFixed) {
          this.isFixed = shouldBeFixed;
          if (this.isFixed) {
            this.calculateContainerWidth();
          }
        }
      } else {
        this.isFixed = false;
      }
    }
  }

  private updateActiveSection(): void {
    if (!this.sections || this.sections.length === 0) return;

    const scrollPosition = window.scrollY + 100;

    this.activeSectionId = '';

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.sections[i].id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          this.activeSectionId = this.sections[i].id;
          return;
        }
        
        if (i === this.sections.length - 1 && scrollPosition >= sectionBottom - 80) {
          this.activeSectionId = this.sections[i].id;
          return;
        }
      }
    }

    if (scrollPosition < 150 && this.sections.length > 0) {
      this.activeSectionId = this.sections[0].id;
    }
  }

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  onSectionClick(event: Event, sectionId: string): void {
    event.preventDefault();
    this.sectionClick.emit({ event, sectionId });
    this.activeSectionId = sectionId;
    
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        const header = document.querySelector('app-header');
        const headerHeight = header ? header.clientHeight : 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 16;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        history.replaceState(null, '', `#${sectionId}`);
      }
    }
  }
}