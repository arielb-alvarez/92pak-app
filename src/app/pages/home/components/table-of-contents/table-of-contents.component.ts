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
      <div class="gradient-card p-4 md:p-5 rounded-xl border border-[#06e9bb]/10 bg-gradient-to-b from-[#110d28]/50 to-[#110d28]/30 backdrop-blur-sm w-full transition-all duration-300"
           [class.shadow-xl]="isFixed"
           [class.border-[#06e9bb]/30]="isFixed"
           [class.scale-[0.98]]="isFixed">
        
        <!-- Minimalist Header -->
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-[#06e9bb]/10">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-[#06e9bb] animate-pulse"></div>
            <h3 class="font-semibold text-sm uppercase tracking-widest text-[#06e9bb]">
              Navigation
            </h3>
          </div>
          
          <!-- Progress Circle -->
          <div class="relative w-8 h-8">
            <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="none" class="stroke-[#06e9bb]/10" stroke-width="2"/>
              <circle cx="18" cy="18" r="16" fill="none" class="stroke-[#06e9bb]" stroke-width="2" 
                      stroke-dasharray="100" [style.stroke-dashoffset]="100 - scrollProgress"/>
            </svg>
            <span class="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#06e9bb]">
              {{scrollProgress}}
            </span>
          </div>
        </div>

        <!-- Minimalist Sections List -->
        <nav class="space-y-1 overflow-y-auto pr-1">
          @for (item of sections; track item.id; let i = $index) {
            <a 
              [href]="'#' + item.id" 
              class="block relative pl-3 py-2.5 rounded-lg transition-all duration-200 group"
              [class.bg-gradient-to-r]="activeSectionId === item.id"
              [class.from-[#06e9bb]/10]="activeSectionId === item.id"
              [class.to-[#06e9bb]/5]="activeSectionId === item.id"
              [class.border-l-2]="activeSectionId === item.id"
              [class.border-[#06e9bb]]="activeSectionId === item.id"
              (click)="onSectionClick($event, item.id)"
            >
              <!-- Number Indicator -->
              <!--
              <div class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="text-xs font-mono text-[#06e9bb] bg-[#110d28] px-1.5 py-0.5 rounded border border-[#06e9bb]/30">
                  {{(i + 1).toString().padStart(2, '0')}}
                </span>
              </div>
              -->
              
              <div class="flex items-start gap-3">
                <!-- Minimal Dot -->
                <div class="flex-shrink-0 mt-2">
                  <div class="w-1.5 h-1.5 rounded-full transition-all duration-300"
                       [class.bg-[#06e9bb]]="activeSectionId === item.id"
                       [class.bg-gray-600]="activeSectionId !== item.id"
                       [class.group-hover:bg-[#06e9bb]]="activeSectionId !== item.id"
                       [class.group-hover:scale-125]="activeSectionId !== item.id">
                  </div>
                </div>
                
                <!-- Section Title -->
                <div class="flex-1 min-w-0">
                  <span class="text-sm text-gray-400 group-hover:text-white transition-colors duration-200 line-clamp-2 leading-relaxed"
                        [class.text-white]="activeSectionId === item.id"
                        [class.font-medium]="activeSectionId === item.id">
                    {{item.title}}
                  </span>
                </div>
              </div>
              
              <!-- Hover Line Effect -->
              <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#06e9bb] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </a>
          }
        </nav>

        <!-- Fixed State - Only Scroll to Top Button -->
        <div class="mt-4 pt-4 border-t border-[#06e9bb]/10 flex justify-end" *ngIf="isFixed">
          <button class="text-xs text-[#06e9bb] hover:text-white transition-colors flex items-center gap-1 group"
                  (click)="scrollToTop()">
            <span>Scroll to Top</span>
            <svg class="w-3 h-3 transform group-hover:-translate-y-0.5 transition-transform" 
                 fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
            </svg>
          </button>
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
    
    ::-webkit-scrollbar {
      width: 2px;
    }
    
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
      background: rgba(6, 233, 187, 0.2);
      border-radius: 2px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(6, 233, 187, 0.4);
    }
    
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Responsive styles for TOC */
    @media (max-width: 1023px) {
      .fixed-toc {
        position: static !important;
        width: 100% !important;
        top: auto !important;
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
  fixedTopPosition: number = 100; // Default top position when fixed
  private scrollListener: any;
  private resizeListener: any;
  private initialOffsetTop: number = 0;
  private readonly headerHeight: number = 80; // Approximate header height
  private readonly mobileBreakpoint: number = 1024; // lg breakpoint

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
      // Calculate initial position after view is rendered
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
      // Debounce resize events
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.calculateInitialPosition();
        this.calculateContainerWidth();
        this.calculateHeaderHeight();
        // Re-check fixed state after resize
        this.updateFixedState();
      }, 150);
    }
  }

  private resizeTimer: any;

  private calculateHeaderHeight(): void {
    if (isPlatformBrowser(this.platformId)) {
      const header = document.querySelector('app-header');
      if (header) {
        const headerRect = header.getBoundingClientRect();
        this.fixedTopPosition = headerRect.height + 20; // Header height + 20px margin
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
      
      // Only fix on large screens (lg breakpoint and above)
      if (windowWidth >= this.mobileBreakpoint) {
        // Check if we've scrolled past the TOC's original position
        const shouldBeFixed = scrollY > this.initialOffsetTop - this.fixedTopPosition;
        
        if (shouldBeFixed !== this.isFixed) {
          this.isFixed = shouldBeFixed;
          if (this.isFixed) {
            this.calculateContainerWidth();
          }
        }
      } else {
        // On mobile/tablet, never use fixed positioning
        this.isFixed = false;
      }
    }
  }

  private updateActiveSection(): void {
    if (!this.sections || this.sections.length === 0) return;

    const scrollPosition = window.scrollY + 120; // Increased offset for better detection

    // Reset active section
    this.activeSectionId = '';

    // Find the active section
    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.sections[i].id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        // Check if current scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          this.activeSectionId = this.sections[i].id;
          return;
        }
        
        // If we're at the bottom of the page, select the last section
        if (i === this.sections.length - 1 && 
            scrollPosition >= sectionBottom - 100) {
          this.activeSectionId = this.sections[i].id;
          return;
        }
      }
    }

    // If no section found and we're at the top, select the first section
    if (scrollPosition < 200 && this.sections.length > 0) {
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
    
    // Smooth scroll to section
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        // Calculate proper offset considering header
        const header = document.querySelector('app-header');
        const headerHeight = header ? header.clientHeight : this.headerHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update URL hash without jumping
        history.replaceState(null, '', `#${sectionId}`);
      }
    }
  }
}