// src/app/pages/home/components/table-of-contents/table-of-contents.component.ts
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-table-of-contents',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sticky top-24" [class.fixed-toc]="isFixed" [style.top.px]="isFixed ? 20 : null">
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
        <nav class="space-y-1 max-h-[350px] overflow-y-auto pr-1" 
             [class.max-h-[300px]]="isFixed">
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
              <div class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="text-xs font-mono text-[#06e9bb] bg-[#110d28] px-1.5 py-0.5 rounded border border-[#06e9bb]/30">
                  {{(i + 1).toString().padStart(2, '0')}}
                </span>
              </div>
              
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

        <!-- Fixed State Indicator -->
        <div class="mt-4 pt-4 border-t border-[#06e9bb]/10" *ngIf="isFixed">
          <div class="flex items-center justify-between text-xs">
            <span class="text-gray-500 flex items-center gap-1">
              <svg class="w-3 h-3 text-[#06e9bb]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Pinned
            </span>
            <button class="text-[#06e9bb] hover:text-white transition-colors flex items-center gap-1 group"
                    (click)="scrollToTop()">
              <span class="text-xs">Top</span>
              <svg class="w-3 h-3 transform group-hover:-translate-y-0.5 transition-transform" 
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
      width: 280px; /* Fixed width when fixed */
      max-width: 100%;
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
  `]
})
export class TableOfContentsComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sections: Array<{title: string, id: string}> = [];
  @Output() sectionClick = new EventEmitter<{event: Event, sectionId: string}>();
  
  activeSectionId: string = '';
  scrollProgress: number = 0;
  isFixed: boolean = false;
  private scrollListener: any;
  private resizeListener: any;
  private initialOffsetTop: number = 0;
  private fixedOffsetTop: number = 20; // Pixels from top when fixed

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollListener();
      this.setupResizeListener();
      this.updateActiveSection();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Calculate initial position after view is rendered
      setTimeout(() => {
        this.calculateInitialPosition();
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
      this.calculateInitialPosition();
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
      this.calculateInitialPosition();
    };
    window.addEventListener('resize', this.resizeListener);
  }

  private updateScrollProgress(): void {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = height > 0 ? Math.round((winScroll / height) * 100) : 0;
  }

  private updateFixedState(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    
    // Check if we've scrolled past the TOC's original position
    if (scrollY > this.initialOffsetTop - this.fixedOffsetTop) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }

  private updateActiveSection(): void {
    if (!this.sections || this.sections.length === 0) return;

    const scrollPosition = window.scrollY + 100; // Offset for header

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.sections[i].id);
      if (section) {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop) {
          this.activeSectionId = this.sections[i].id;
          return;
        }
      }
    }

    this.activeSectionId = '';
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
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }
}