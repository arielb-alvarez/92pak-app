// src/app/pages/home/components/content-section/advanced-earning-strategies.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advanced-earning-strategies',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="advanced-earning-strategies" class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20 mb-8" *ngIf="earningStrategies.length > 0">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-[#06e9bb] mb-4">Advanced Earning Strategies: Partner Rewards Program</h2>
        <p class="text-gray-300 mb-6">Unlock the full potential of {{appInfo?.name || '92 PAK Game'}} with these proven strategies that top earners use daily</p>
        
        <!-- Stats Banner -->
        <div class="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-[#06e9bb]/10 to-[#06e9bb]/5 rounded-full border border-[#06e9bb]/20 mb-8">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#06e9bb]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span class="text-white font-semibold">Top 5%</span>
          </div>
          <span class="text-gray-400">|</span>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#06e9bb]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span class="text-white font-semibold">+PKR 50K/Month</span>
          </div>
          <span class="text-gray-400">|</span>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#06e9bb]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span class="text-white font-semibold">1,200+ Partners</span>
          </div>
        </div>
      </div>

      <!-- Strategy Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        @for (strategy of earningStrategies; track strategy.title; let i = $index) {
          <div class="relative group">
            <!-- Background Gradient Effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-[#06e9bb]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Strategy Card -->
            <div class="relative bg-[#1a1442] border border-[#06e9bb]/20 rounded-xl p-6 hover:border-[#06e9bb]/40 hover:transform hover:-translate-y-1 transition-all duration-300 h-full">
              <!-- Strategy Number -->
              <div class="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-[#06e9bb] to-[#00d4aa] rounded-full flex items-center justify-center text-[#110d28] font-bold text-lg shadow-lg shadow-[#06e9bb]/30">
                {{i + 1}}
              </div>
              
              <!-- Strategy Icon - Fixed with SVG -->
              <div class="mb-4">
                <div class="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#06e9bb]/10 to-[#06e9bb]/5 border border-[#06e9bb]/20 group-hover:scale-110 transition-transform duration-300">
                  <div class="w-8 h-8 text-[#06e9bb]">
                    @switch(i % 6) {
                      @case(0) {
                        <!-- Referral Icon -->
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                        </svg>
                      }
                      @case(1) {
                        <!-- Color Prediction Icon -->
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58s4.1-.78 5.66-2.34c3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"/>
                        </svg>
                      }
                      @case(2) {
                        <!-- Network Icon -->
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                        </svg>
                      }
                      @case(3) {
                        <!-- Clock Icon -->
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                        </svg>
                      }
                      @case(4) {
                        <!-- Trophy Icon -->
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                        </svg>
                      }
                      @case(5) {
                        <!-- Star Icon -->
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      }
                    }
                  </div>
                </div>
              </div>
              
              <!-- Strategy Title -->
              <h3 class="font-bold text-xl mb-3 text-white group-hover:text-[#06e9bb] transition-colors">{{strategy.title}}</h3>
              
              <!-- Strategy Description -->
              <p class="text-gray-300 mb-4">{{strategy.description}}</p>
              
              <!-- Earning Potential -->
              <div class="flex items-center justify-between mt-4 pt-4 border-t border-[#06e9bb]/10">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-[#06e9bb]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                  <span class="text-sm text-gray-400">Earning Potential:</span>
                </div>
                <span class="text-[#06e9bb] font-bold">{{strategy.earningPotential}}</span>
              </div>
              
              <!-- Difficulty Level -->
              <div class="flex items-center gap-2 mt-3">
                @for (star of getStars(strategy.difficulty); track $index) {
                  <svg class="w-4 h-4" [ngClass]="star === 'full' ? 'text-[#06e9bb]' : 'text-gray-600'" fill="currentColor" viewBox="0 0 24 24">
                    @if (star === 'full') {
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    } @else {
                      <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
                    }
                  </svg>
                }
                <span class="text-xs text-gray-400 ml-2">{{strategy.difficulty}} Level</span>
              </div>
              
              <!-- Quick Tip -->
              @if (strategy.tip) {
                <div class="mt-4 p-3 bg-[#06e9bb]/5 rounded-lg border border-[#06e9bb]/10">
                  <div class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-[#06e9bb] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                    <p class="text-sm text-[#06e9bb]">{{strategy.tip}}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        }
      </div>

      <!-- Performance Dashboard -->
      <div class="mt-12 bg-gradient-to-r from-[#1a1442] to-[#110d28] rounded-xl border border-[#06e9bb]/20 p-6">
        <h3 class="font-bold text-xl mb-6 text-center text-[#06e9bb]">Performance Dashboard: Track Your Earnings</h3>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center p-4 bg-[#110d28] rounded-lg group hover:bg-[#06e9bb]/10 transition-colors">
            <div class="text-3xl font-bold text-[#06e9bb] mb-2 group-hover:scale-110 transition-transform">6%</div>
            <div class="text-sm text-gray-300">Referral Commission</div>
          </div>
          
          <div class="text-center p-4 bg-[#110d28] rounded-lg group hover:bg-[#06e9bb]/10 transition-colors">
            <div class="text-3xl font-bold text-[#06e9bb] mb-2 group-hover:scale-110 transition-transform">PKR 500+</div>
            <div class="text-sm text-gray-300">Daily Average</div>
          </div>
          
          <div class="text-center p-4 bg-[#110d28] rounded-lg group hover:bg-[#06e9bb]/10 transition-colors">
            <div class="text-3xl font-bold text-[#06e9bb] mb-2 group-hover:scale-110 transition-transform">Instant</div>
            <div class="text-sm text-gray-300">Withdrawal Time</div>
          </div>
          
          <div class="text-center p-4 bg-[#110d28] rounded-lg group hover:bg-[#06e9bb]/10 transition-colors">
            <div class="text-3xl font-bold text-[#06e9bb] mb-2 group-hover:scale-110 transition-transform">24/7</div>
            <div class="text-sm text-gray-300">Support Available</div>
          </div>
        </div>
      </div>

      <!-- Pro Trader Section -->
      <div class="mt-12 p-6 bg-gradient-to-r from-[#06e9bb]/10 to-[#06e9bb]/5 rounded-xl border border-[#06e9bb]/20">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <!-- Trader Icon -->
          <div class="flex-shrink-0">
            <div class="relative">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-[#06e9bb] to-[#00d4aa] flex items-center justify-center">
                <svg class="w-10 h-10 text-[#110d28]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  <path d="M22 12h-4v-2h4v2zm-6 4h4v2h-4v-2zm4-8h-4v2h4V8z" fill="#110d28" fill-opacity="0.7"/>
                </svg>
              </div>
              <div class="absolute -top-2 -right-2 bg-[#110d28] text-[#06e9bb] text-xs font-bold px-2 py-1 rounded-full border border-[#06e9bb]">
                PRO
              </div>
            </div>
          </div>
          
          <!-- Trader Content -->
          <div class="flex-1">
            <h4 class="font-bold text-lg mb-2 text-white">Pro Trader Insight</h4>
            <p class="text-gray-300 mb-4">
              "Combining multiple strategies yields the best results. Start with basic games, build your referral network, 
              then diversify into advanced games. Track your daily performance and adjust your strategy accordingly."
            </p>
            <div class="flex items-center gap-4">
              <div>
                <div class="text-[#06e9bb] font-bold">Ali Hassan</div>
                <div class="text-sm text-gray-400">Top Earner (PKR 2.5M+)</div>
              </div>
              <div class="flex items-center gap-1">
                @for (star of [1,2,3,4,5]; track $index) {
                  <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                }
                <span class="text-sm text-gray-400 ml-2">4.9/5</span>
              </div>
            </div>
          </div>
          
          <!-- Achievement -->
          <div class="flex-shrink-0 text-center">
            <div class="text-4xl font-bold text-[#06e9bb] mb-2">PKR 2.5M+</div>
            <div class="text-sm text-gray-300">Total Earnings</div>
          </div>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="mt-10 text-center">
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn-primary px-8 py-4 text-lg group hover:scale-105 transition-transform" (click)="register.emit()">
            <span class="flex items-center justify-center gap-2">
              <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Start Implementing These Strategies Now
            </span>
          </button>
          <button class="btn-secondary px-8 py-4 text-lg group hover:scale-105 transition-transform" (click)="scrollToSection.emit('expert-tips')">
            <span class="flex items-center justify-center gap-2">
              <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              View Expert Tips
            </span>
          </button>
        </div>
      </div>
    </section>
  `
})
export class AdvancedEarningStrategiesComponent {
  @Input() appInfo: any = {};
  @Input() earningStrategies: any[] = [];
  @Output() register = new EventEmitter<void>();
  @Output() scrollToSection = new EventEmitter<string>();

  getStars(difficulty: string): string[] {
    switch(difficulty) {
      case 'Easy': return ['full', 'empty', 'empty'];
      case 'Medium': return ['full', 'full', 'empty'];
      case 'Hard': return ['full', 'full', 'full'];
      default: return ['full', 'empty', 'empty'];
    }
  }
}