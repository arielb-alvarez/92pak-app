// src/app/pages/home/components/content-section/user-reviews.component.ts
import { Component, Input, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-user-reviews',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="user-reviews" class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20 mb-8">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-[#06e9bb] mb-4">Authentic User Reviews and Testimonials</h2>
        <p class="text-gray-300 max-w-3xl mx-auto">Hear what thousands of Pakistani users are saying about their earning experience with {{appInfo?.name || '92 PAK Game'}}</p>
        
        <!-- Overall Rating -->
        <div class="inline-flex items-center gap-4 mt-6 px-6 py-3 bg-gradient-to-r from-[#06e9bb]/10 to-[#06e9bb]/5 rounded-full border border-[#06e9bb]/20">
          <div class="flex items-center gap-1">
            @for (star of [1,2,3,4,5]; track $index) {
              <svg class="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            }
          </div>
          <div>
            <span class="text-2xl font-bold text-white">4.9</span>
            <span class="text-gray-400 ml-2">/ 5.0</span>
          </div>
          <div class="text-gray-400">|</div>
          <div class="text-gray-300">2,500+ Reviews</div>
        </div>
      </div>
      
      <!-- Carousel Container -->
      <div class="relative">
        <!-- Carousel -->
        <div class="overflow-hidden">
          <div class="flex transition-transform duration-500 ease-in-out" 
               [style.transform]="'translateX(-' + (currentIndex * 100) + '%)'">
            @for (review of getReviewsList(); track review.id; let i = $index) {
              <div class="w-full flex-shrink-0 px-4">
                <div class="bg-gradient-to-br from-[#1a1442] to-[#110d28] rounded-xl border border-[#06e9bb]/20 p-6 h-full">
                  <!-- Review Header -->
                  <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center gap-3">
                      <!-- User Avatar -->
                      <div class="relative">
                        <div class="w-14 h-14 rounded-full bg-gradient-to-br from-[#06e9bb] to-[#00d4aa] flex items-center justify-center text-[#110d28] font-bold text-lg">
                          {{review.author?.charAt(0) || 'U'}}
                        </div>
                        @if (review.verified) {
                          <div class="absolute -top-1 -right-1 bg-[#06e9bb] text-[#110d28] p-1 rounded-full">
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                        }
                      </div>
                      
                      <!-- User Info -->
                      <div>
                        <div class="font-bold text-white">{{review.author || 'Anonymous User'}}</div>
                        <div class="text-sm text-gray-400">{{review.location || 'Pakistan'}}</div>
                        <div class="flex items-center gap-1 mt-1">
                          @for (star of [1,2,3,4,5]; track $index) {
                            <svg class="w-4 h-4" [class.text-yellow-500]="$index < (review.rating || 5)" [class.text-gray-600]="$index >= (review.rating || 5)" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                          }
                          <span class="text-xs text-gray-400 ml-1">{{review.rating || 5}}.0</span>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Review Date -->
                    <div class="text-xs text-gray-500">{{review.date || '2 days ago'}}</div>
                  </div>
                  
                  <!-- Review Content -->
                  <div class="mb-4">
                    <h4 class="font-semibold text-lg mb-2 text-[#06e9bb]">{{review.title || 'Great Earning Experience'}}</h4>
                    <p class="text-gray-300 mb-3 italic">{{review.text || "I've tried multiple earning apps, but " + appInfo?.name + " delivers real results."}}</p>
                    
                    <!-- Earning Details -->
                    @if (review.earnings) {
                      <div class="mt-4 p-3 bg-[#110d28] rounded-lg border border-[#06e9bb]/10">
                        <div class="flex items-center justify-between">
                          <span class="text-sm text-gray-400">Earnings with {{appInfo?.name || '92 PAK Game'}}:</span>
                          <span class="text-[#06e9bb] font-bold">{{review.earnings}}</span>
                        </div>
                      </div>
                    }
                  </div>
                  
                  <!-- Review Tags -->
                  @if (review.tags && review.tags.length > 0) {
                    <div class="flex flex-wrap gap-2">
                      @for (tag of review.tags; track tag) {
                        <span class="text-xs px-2 py-1 bg-[#06e9bb]/10 text-[#06e9bb] rounded border border-[#06e9bb]/20">
                          {{tag}}
                        </span>
                      }
                    </div>
                  }
                </div>
              </div>
            }
          </div>
        </div>
        
        <!-- Navigation Buttons -->
        <button class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-[#110d28] text-[#06e9bb] p-3 rounded-full border border-[#06e9bb]/30 hover:bg-[#06e9bb] hover:text-[#110d28] transition-all z-10 shadow-lg" 
                (click)="previousReview()" 
                [class.opacity-50]="currentIndex === 0"
                [class.cursor-not-allowed]="currentIndex === 0">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        
        <button class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-[#110d28] text-[#06e9bb] p-3 rounded-full border border-[#06e9bb]/30 hover:bg-[#06e9bb] hover:text-[#110d28] transition-all z-10 shadow-lg"
                (click)="nextReview()"
                [class.opacity-50]="currentIndex >= getReviewsList().length - 1"
                [class.cursor-not-allowed]="currentIndex >= getReviewsList().length - 1">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
        
        <!-- Carousel Indicators -->
        <div class="flex justify-center gap-2 mt-6">
          @for (review of getReviewsList(); track review.id; let i = $index) {
            <button class="w-3 h-3 rounded-full transition-all duration-300" 
                    [class.bg-[#06e9bb]]="i === currentIndex"
                    [class.bg-gray-600]="i !== currentIndex"
                    [class.scale-125]="i === currentIndex"
                    (click)="goToReview(i)">
            </button>
          }
        </div>
      </div>
      
      <!-- Reviews Stats -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="text-center p-4 bg-gradient-to-b from-[#1a1442] to-[#110d28] rounded-xl border border-[#06e9bb]/20">
          <div class="text-2xl font-bold text-[#06e9bb] mb-2">2,500+</div>
          <div class="text-sm text-gray-300">Happy Users</div>
        </div>
        
        <div class="text-center p-4 bg-gradient-to-b from-[#1a1442] to-[#110d28] rounded-xl border border-[#06e9bb]/20">
          <div class="text-2xl font-bold text-[#06e9bb] mb-2">PKR 15M+</div>
          <div class="text-sm text-gray-300">Total Earned</div>
        </div>
        
        <div class="text-center p-4 bg-gradient-to-b from-[#1a1442] to-[#110d28] rounded-xl border border-[#06e9bb]/20">
          <div class="text-2xl font-bold text-[#06e9bb] mb-2">98%</div>
          <div class="text-sm text-gray-300">Success Rate</div>
        </div>
        
        <div class="text-center p-4 bg-gradient-to-b from-[#1a1442] to-[#110d28] rounded-xl border border-[#06e9bb]/20">
          <div class="text-2xl font-bold text-[#06e9bb] mb-2">24/7</div>
          <div class="text-sm text-gray-300">Support</div>
        </div>
      </div>
      
      <!-- Add Your Review CTA -->
      <div class="mt-10 text-center">
        <div class="inline-block p-6 bg-gradient-to-r from-[#06e9bb]/10 to-[#06e9bb]/5 rounded-xl border border-[#06e9bb]/20">
          <h4 class="font-bold text-lg mb-3 text-[#06e9bb]">Share Your Experience</h4>
          <p class="text-gray-300 mb-4 max-w-md mx-auto">Have you earned with {{appInfo?.name || '92 PAK Game'}}? Share your story and help others get started!</p>
          <button class="btn-secondary px-6 py-3 text-sm hover:scale-105 transition-transform">
            <span class="flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
              </svg>
              Share Your Review
            </span>
          </button>
        </div>
      </div>
    </section>
  `
})
export class UserReviewsComponent implements OnInit, OnDestroy {
  @Input() reviews: any = {}; // Back to original name
  @Input() appInfo: any = {};
  
  currentIndex: number = 0;
  private autoSlideInterval: any;
  
  // Default reviews if none provided
  private defaultReviews = [
    {
      id: 1,
      author: 'Ahmed Raza',
      location: 'Lahore',
      rating: 5,
      title: 'Life-Changing Experience',
      text: "I've tried multiple earning apps in Pakistan, but 92 PAK Game delivers real results. The instant JazzCash withdrawals and daily bonus system helped me earn consistently.",
      earnings: 'PKR 85,000+',
      verified: true,
      date: '2 days ago',
      tags: ['JazzCash', 'Easy Withdrawal', 'Color Prediction']
    },
    {
      id: 2,
      author: 'Fatima Khan',
      location: 'Karachi',
      rating: 5,
      title: 'Perfect for Students',
      text: 'As a university student, this app has been a game-changer. I earn enough to cover my monthly expenses just by playing 1-2 hours daily.',
      earnings: 'PKR 45,000+',
      verified: true,
      date: '1 week ago',
      tags: ['Student Friendly', 'Part-time', 'Easy UI']
    },
    {
      id: 3,
      author: 'Bilal Ahmed',
      location: 'Islamabad',
      rating: 4,
      title: 'Great Referral System',
      text: 'The 6% referral commission is fantastic. I built a small team of 10 people and now earn passive income every day.',
      earnings: 'PKR 120,000+',
      verified: true,
      date: '3 days ago',
      tags: ['Referral', 'Passive Income', 'Team Building']
    },
    {
      id: 4,
      author: 'Sara Malik',
      location: 'Faisalabad',
      rating: 5,
      title: 'Transparent and Fair',
      text: 'What I love most is the transparency. All transactions are clear, and withdrawals are processed within minutes.',
      earnings: 'PKR 65,000+',
      verified: true,
      date: '5 days ago',
      tags: ['Transparent', 'Quick Payout', 'Trustworthy']
    },
    {
      id: 5,
      author: 'Usman Ali',
      location: 'Rawalpindi',
      rating: 5,
      title: 'Best Earning App 2025',
      text: 'Compared to other apps, 92 PAK Game has the best interface and highest earning potential. The support team is also very responsive.',
      earnings: 'PKR 150,000+',
      verified: true,
      date: '1 day ago',
      tags: ['Top Rated', 'Best UI', 'Great Support']
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Start auto-slide if in browser
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  // Method to get reviews list (fixes duplicate identifier issue)
  getReviewsList(): any[] {
    // Handle different input formats
    if (Array.isArray(this.reviews)) {
      return this.reviews;
    } else if (this.reviews && typeof this.reviews === 'object') {
      // Handle object format from original home component
      if (this.reviews.list && Array.isArray(this.reviews.list)) {
        return this.reviews.list;
      }
      // If it's the old format with personal/user properties
      if (this.reviews.personal || this.reviews.user) {
        const reviewsArray = [];
        if (this.reviews.personal) {
          reviewsArray.push({
            id: 1,
            author: 'Expert',
            location: 'Pakistan',
            rating: 5,
            title: 'Expert Review',
            text: this.reviews.personal,
            earnings: 'Top Rated',
            verified: true,
            date: 'Recently',
            tags: ['Expert', 'Review']
          });
        }
        if (this.reviews.user) {
          reviewsArray.push({
            id: 2,
            author: this.reviews.user.author || 'User',
            location: 'Pakistan',
            rating: 5,
            title: 'User Success Story',
            text: this.reviews.user.text || "I've tried multiple earning apps, but 92 PAK Game delivers real results.",
            earnings: 'Verified User',
            verified: true,
            date: 'Recently',
            tags: ['User', 'Success']
          });
        }
        return reviewsArray;
      }
    }
    
    // Return default reviews if no valid input
    return this.defaultReviews;
  }

  nextReview(): void {
    const reviewsList = this.getReviewsList();
    if (this.currentIndex < reviewsList.length - 1) {
      this.currentIndex++;
    }
    this.resetAutoSlide();
  }

  previousReview(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    this.resetAutoSlide();
  }

  goToReview(index: number): void {
    this.currentIndex = index;
    this.resetAutoSlide();
  }

  private startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      const reviewsList = this.getReviewsList();
      if (this.currentIndex < reviewsList.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    }, 5000); // Change every 5 seconds
  }

  private stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  private resetAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}