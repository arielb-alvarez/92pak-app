// src/app/pages/home/home.component.ts
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { ConfigService } from '../../services/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="gradient-bg py-16 relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2306e9bb%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      <div class="container mx-auto px-4 max-w-6xl relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-8">
          <!-- Left Side - Logo and Main Content -->
          <div class="flex-1 text-center lg:text-left">
            <!-- Logo -->
            <div class="mb-8 flex justify-center lg:justify-start">
              <div class="bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10">
                <picture>
                  <source srcset="assets/images/92pak-game-logo-official-2025.webp" type="image/webp">
                  <source srcset="assets/images/92pak-game-logo-official-2025.png" type="image/png">
                  <img 
                    src="assets/images/92pak-game-logo-official-2025.png" 
                    alt="{{appInfo?.name || '92 PAK Game'}} - Official Real Money Earning App Logo 2025"
                    class="w-36 h-36 object-contain rounded-xl"
                    title="{{appInfo?.name || '92 PAK Game'}} - Best Earning App in Pakistan"
                    width="144"
                    height="144"
                    loading="eager"
                    (error)="onImageError($event)"
                  >
                </picture>
                <div #fallbackLogo class="w-36 h-36 bg-[#06e9bb] rounded-xl flex items-center justify-center text-[#110d28] font-bold text-xl hidden">
                  {{appInfo?.name || '92 PAK'}}
                </div>
              </div>
            </div>

            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {{heroContent?.title || '92 PAK Game APK Download 2025'}}<br>
              <span class="text-[#06e9bb]">{{heroContent?.subtitle || 'Top Real Money Earning App in Pakistan'}}</span>
            </h1>
            
            <p class="text-xl text-gray-300 mb-8 leading-relaxed">
              {{heroContent?.description || 'Discover how 92 PAK Game transforms mobile gaming into real cash earnings in Pakistan. Join thousands of players who earn daily through exciting color prediction games, lottery, and referral bonuses with instant JazzCash and Easypaisa withdrawals.'}}
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button class="btn-primary text-lg px-8 py-4" (click)="navigateToRegister()">
                {{heroContent?.ctaButton || 'Download APK & Start Earning'}}
              </button>
            </div>
          </div>

          <!-- Right Side - App Info Cards -->
          <div class="flex-1 w-full max-w-md" *ngIf="appInfo">
            <div class="grid grid-cols-2 gap-4">
              <!-- App Name -->
              <div class="gradient-card p-4 rounded-xl border border-[#06e9bb]/20 hover:border-[#06e9bb]/40 transition-all duration-300">
                <div class="text-[#06e9bb] mb-2">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z"/>
                  </svg>
                </div>
                <h3 class="text-gray-400 text-sm mb-1">App Name</h3>
                <p class="text-[#06e9bb] font-bold text-lg">{{appInfo.name}}</p>
              </div>

              <!-- Size -->
              <div class="gradient-card p-4 rounded-xl border border-[#06e9bb]/20 hover:border-[#06e9bb]/40 transition-all duration-300">
                <div class="text-[#06e9bb] mb-2">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H7v-2h4v2zm0-4H7v-2h4v2zm0-4H7V7h4v2zm6 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z"/>
                  </svg>
                </div>
                <h3 class="text-gray-400 text-sm mb-1">Size</h3>
                <p class="text-[#06e9bb] font-bold text-lg">{{appInfo.size}}</p>
              </div>

              <!-- Developer -->
              <div class="gradient-card p-4 rounded-xl border border-[#06e9bb]/20 hover:border-[#06e9bb]/40 transition-all duration-300">
                <div class="text-[#06e9bb] mb-2">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 class="text-gray-400 text-sm mb-1">Developer</h3>
                <p class="text-[#06e9bb] font-bold text-sm">{{appInfo.developer}}</p>
              </div>

              <!-- Category -->
              <div class="gradient-card p-4 rounded-xl border border-[#06e9bb]/20 hover:border-[#06e9bb]/40 transition-all duration-300">
                <div class="text-[#06e9bb] mb-2">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h3 class="text-gray-400 text-sm mb-1">Category</h3>
                <p class="text-[#06e9bb] font-bold text-sm">{{appInfo.category}}</p>
              </div>

              <!-- Min Deposit -->
              <div class="gradient-card p-4 rounded-xl border border-[#06e9bb]/20 hover:border-[#06e9bb]/40 transition-all duration-300">
                <div class="text-[#06e9bb] mb-2">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.10 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.78-1.18 2.75-3.12 3.16z"/>
                  </svg>
                </div>
                <h3 class="text-gray-400 text-sm mb-1">Min Deposit</h3>
                <p class="text-[#06e9bb] font-bold text-lg">{{appInfo.minDeposit}}</p>
              </div>

              <!-- Min Withdraw -->
              <div class="gradient-card p-4 rounded-xl border border-[#06e9bb]/20 hover:border-[#06e9bb]/40 transition-all duration-300">
                <div class="text-[#06e9bb] mb-2">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                  </svg>
                </div>
                <h3 class="text-gray-400 text-sm mb-1">Min Withdraw</h3>
                <p class="text-[#06e9bb] font-bold text-lg">{{appInfo.minWithdraw}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-4 max-w-6xl py-12">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Table of Contents Sidebar -->
        <aside class="lg:col-span-1">
          <div class="gradient-card p-6 rounded-xl shadow-lg border border-[#06e9bb]/20 sticky top-24">
            <h3 class="font-bold text-lg mb-4 text-[#06e9bb]">Table of Contents</h3>
            <nav class="space-y-2">
              @for (item of tableOfContents; track item.id) {
                <a [href]="'#' + item.id" 
                   class="block text-[#06e9bb] hover:text-[#06e9bb]/80 transition-colors flex items-start group" 
                   (click)="scrollToSection($event, item.id)">
                  <span class="flex-shrink-0 w-2 h-2 mt-2 mr-3 rounded-full bg-[#06e9bb] group-hover:scale-150 transition-transform"></span>
                  <span>{{item.title}}</span>
                </a>
              }
            </nav>
          </div>
        </aside>

        <!-- Main Article -->
        <article class="lg:col-span-3">
          <!-- Introduction -->
          <section class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20 mb-8">
            <p class="mb-6">
              <picture>
                <source srcset="assets/images/92pak-game-home-banner-2025.webp" type="image/webp">
                <source srcset="assets/images/92pak-game-home-banner-2025.png" type="image/png">
                <img 
                  class="rounded-xl w-full h-auto"
                  src="assets/images/92pak-game-home-banner-2025.png"
                  alt="{{appInfo?.name || '92 PAK Game'}} - Real Money Earning App Interface"
                  title="{{appInfo?.name || '92 PAK'}} Real Money Earning Platform 2025"
                  loading="lazy"
                  width="1200"
                  height="630"
                  (error)="onImageError($event)"
                />
              </picture>
            </p>
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
              Welcome to the ultimate guide for {{appInfo?.name || '92 PAK Game'}} - Pakistan's fastest-growing real money earning app in 2025. This comprehensive tutorial covers everything from APK download and registration to advanced earning strategies and withdrawal methods through JazzCash and Easypaisa.
            </p>
            
            <p class="text-gray-300 text-lg leading-relaxed">
              The mobile gaming landscape in Pakistan has evolved dramatically, and {{appInfo?.name || '92 PAK Game'}} leads this revolution by combining entertainment with genuine income opportunities. Designed specifically for Pakistani users, this earning app offers multiple revenue streams through color prediction games, lottery, and referral programs with minimal investment requirements.
            </p>
          </section>

          <!-- What is 92 PAK Game -->
          <section id="what-is-92pak-game" class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20 mb-8">
            <h2 class="text-3xl font-bold text-[#06e9bb] mb-6">What is {{appInfo?.name || '92 PAK Game'}}? Complete Overview</h2>
            <p class="text-gray-300 mb-4">
              {{appInfo?.name || '92 PAK Game'}} represents the next generation of mobile earning platforms in Pakistan, featuring a sophisticated blend of color prediction games, lottery draws, and casino-style entertainment. This legitimate earning app provides Pakistani users with multiple avenues to generate real income through strategic gameplay and referral marketing.
            </p>

            <p class="mb-4">
              <picture>
                <source srcset="assets/images/92pak-game-featured-games-preview.webp" type="image/webp">
                <source srcset="assets/images/92pak-game-featured-games-preview.png" type="image/png">
                <img 
                  class="rounded-xl w-full h-auto"
                  src="assets/images/92pak-game-featured-games-preview.png"
                  alt="Top earning games on {{appInfo?.name || '92 PAK Game'}} - Color Prediction & Lottery"
                  title="Popular Money Earning Games in Pakistan 2025"
                  loading="lazy"
                  width="1200"
                  height="600"
                  (error)="onImageError($event)"
                />
              </picture>
            </p>
            
            <p class="text-gray-300 mb-4">
              Unlike traditional gaming applications, {{appInfo?.name || '92 PAK Game'}} emphasizes transparency and fair play with certified random number generators and regular audits. The platform's user-friendly interface supports both Urdu and English, making it accessible to players across Pakistan. With instant deposit options through JazzCash, Easypaisa, and USDT, users can start earning immediately after downloading the APK.
            </p>

            <!-- Registration Requirements -->
            <div class="bg-[#06e9bb]/10 p-6 rounded-lg mt-6 border border-[#06e9bb]/30">
              <h3 class="font-bold text-lg mb-4 text-[#06e9bb]">Registration Requirements</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 class="font-semibold text-gray-300">Phone Number or Email</h4>
                  <p class="text-gray-400 text-sm">Basic verification required</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-300">Payment Methods</h4>
                  <p class="text-gray-400 text-sm">{{appInfo?.supportedPayments?.join(', ') || 'JazzCash, Easypaisa, USDT'}} supported</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-300">Minimum Age</h4>
                  <p class="text-gray-400 text-sm">18+ years only</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Premium Features -->
          <section id="premium-features" class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20 mb-8">
            <div class="text-center mb-10">
              <h2 class="text-3xl font-bold text-[#06e9bb] mb-4">Premium Features of {{appInfo?.name || '92 PAK'}} Real Earning App</h2>
              <p class="text-gray-300">Discover what makes {{appInfo?.name || '92 PAK'}} the top choice for Pakistani earners in 2025</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Feature cards remain the same, only SVG content... -->
              <!-- Feature 1: New Real Earning App -->
              <div class="feature-card group">
                <div class="feature-icon">
                  <svg class="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <path d="M24 4L40 12V36L24 44L8 36V12L24 4Z" fill="url(#grad1)" stroke="#06e9bb" stroke-width="2"/>
                    <path d="M24 16L32 20V28L24 32L16 28V20L24 16Z" fill="#06e9bb" fill-opacity="0.2" stroke="#06e9bb" stroke-width="1.5"/>
                    <circle cx="24" cy="24" r="6" fill="#06e9bb" fill-opacity="0.3"/>
                    <defs>
                      <linearGradient id="grad1" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#06e9bb" stop-opacity="0.1"/>
                        <stop offset="1" stop-color="#06e9bb" stop-opacity="0.05"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">New Real Earning App</h3>
                <p class="feature-description">Fresh real money app transforming gaming in Pakistan. Every game offers tangible rewards with quick withdrawals to local wallets.</p>
              </div>

              <!-- Remaining feature cards... (truncated for brevity, keep original) -->
              <!-- Feature 2: Simple Interface -->
              <div class="feature-card group">
                <div class="feature-icon">
                  <svg class="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="8" width="32" height="32" rx="8" fill="url(#grad2)" stroke="#06e9bb" stroke-width="2"/>
                    <rect x="12" y="12" width="12" height="12" rx="3" fill="#06e9bb" fill-opacity="0.3"/>
                    <rect x="28" y="12" width="8" height="4" rx="2" fill="#06e9bb"/>
                    <rect x="28" y="20" width="8" height="4" rx="2" fill="#06e9bb"/>
                    <rect x="12" y="28" width="24" height="8" rx="4" fill="#06e9bb" fill-opacity="0.2"/>
                    <defs>
                      <linearGradient id="grad2" x1="24" y1="8" x2="24" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#06e9bb" stop-opacity="0.1"/>
                        <stop offset="1" stop-color="#06e9bb" stop-opacity="0.05"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">Simple & Smooth Interface</h3>
                <p class="feature-description">Clean design with intuitive navigation. Clear icons guide you without overwhelming ads, perfect for beginners and pros alike.</p>
              </div>

              <!-- Feature 3: Fast Transactions -->
              <div class="feature-card group">
                <div class="feature-icon">
                  <svg class="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="18" fill="url(#grad3)" stroke="#06e9bb" stroke-width="2"/>
                    <path d="M18 24L22 28L30 20" stroke="#06e9bb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24 18L24 30" stroke="#06e9bb" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="24" cy="24" r="8" fill="#06e9bb" fill-opacity="0.1"/>
                    <defs>
                      <linearGradient id="grad3" x1="24" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#06e9bb" stop-opacity="0.1"/>
                        <stop offset="1" stop-color="#06e9bb" stop-opacity="0.05"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">Fast & Secure Transactions</h3>
                <p class="feature-description">Top-notch encryption for financial safety. Quick JazzCash & Easypaisa transactions with personal details protected.</p>
              </div>

              <!-- Feature 4: Exclusive Bonuses -->
              <div class="feature-card group">
                <div class="feature-icon">
                  <svg class="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <path d="M24 4L30 18H42L32 28L36 42L24 30L12 42L16 28L6 18H18L24 4Z" fill="url(#grad4)" stroke="#06e9bb" stroke-width="2"/>
                    <circle cx="24" cy="24" r="8" fill="#06e9bb" fill-opacity="0.2"/>
                    <circle cx="24" cy="24" r="4" fill="#06e9bb"/>
                    <defs>
                      <linearGradient id="grad4" x1="24" y1="4" x2="24" y2="42" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#06e9bb" stop-opacity="0.2"/>
                        <stop offset="1" stop-color="#06e9bb" stop-opacity="0.05"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">Exclusive Bonuses & Rewards</h3>
                <p class="feature-description">Daily login bonuses, welcome rewards, and special event prizes. Tailored rewards that feel like opening gifts every day.</p>
              </div>

              <!-- Feature 5: Fast Withdrawals -->
              <div class="feature-card group">
                <div class="feature-icon">
                  <svg class="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="14" width="32" height="20" rx="4" fill="url(#grad5)" stroke="#06e9bb" stroke-width="2"/>
                    <rect x="14" y="10" width="20" height="4" rx="2" fill="#06e9bb" fill-opacity="0.3"/>
                    <rect x="18" y="34" width="12" height="4" rx="2" fill="#06e9bb"/>
                    <circle cx="24" cy="24" r="4" fill="#06e9bb" fill-opacity="0.2"/>
                    <path d="M20 24H28" stroke="#06e9bb" stroke-width="2"/>
                    <path d="M24 20V28" stroke="#06e9bb" stroke-width="2"/>
                    <defs>
                      <linearGradient id="grad5" x1="24" y1="14" x2="24" y2="34" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#06e9bb" stop-opacity="0.1"/>
                        <stop offset="1" stop-color="#06e9bb" stop-opacity="0.05"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">Withdraw Fast, Safe & Stable</h3>
                <p class="feature-description">No minimum limits with instant JazzCash/Easypaisa transfers. Stable, secure withdrawals processed within hours.</p>
              </div>

              <!-- Feature 6: 6% Agent Salary -->
              <div class="feature-card group">
                <div class="feature-icon">
                  <svg class="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="16" fill="url(#grad6)" stroke="#06e9bb" stroke-width="2"/>
                    <path d="M24 12V36" stroke="#06e9bb" stroke-width="2" stroke-dasharray="3 3"/>
                    <path d="M12 24H36" stroke="#06e9bb" stroke-width="2" stroke-dasharray="3 3"/>
                    <text x="24" y="26" text-anchor="middle" fill="#06e9bb" font-size="10" font-weight="bold">6%</text>
                    <circle cx="24" cy="24" r="8" fill="#06e9bb" fill-opacity="0.1"/>
                    <defs>
                      <linearGradient id="grad6" x1="24" y1="8" x2="24" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#06e9bb" stop-opacity="0.1"/>
                        <stop offset="1" stop-color="#06e9bb" stop-opacity="0.05"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">6% Agent Salary</h3>
                <p class="feature-description">Earn 6% commission on user deposits. Passive income grows as your referral network expands - share and earn!</p>
              </div>

              <!-- Feature 7: Rich Prizes -->
              <div class="feature-card group">
                <div class="feature-icon">
                  <svg class="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <rect x="10" y="10" width="28" height="28" rx="4" fill="url(#grad7)" stroke="#06e9bb" stroke-width="2"/>
                    <path d="M18 18L30 30" stroke="#06e9bb" stroke-width="2"/>
                    <path d="M30 18L18 30" stroke="#06e9bb" stroke-width="2"/>
                    <circle cx="24" cy="24" r="6" fill="#06e9bb" fill-opacity="0.2"/>
                    <path d="M24 18V24H30" stroke="#06e9bb" stroke-width="2" fill="none"/>
                    <defs>
                      <linearGradient id="grad7" x1="24" y1="10" x2="24" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#06e9bb" stop-opacity="0.2"/>
                        <stop offset="1" stop-color="#06e9bb" stop-opacity="0.05"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">Rich Prizes for Agents</h3>
                <p class="feature-description">Win BMW cars, gold, or cash rewards. Regular contests with life-changing prizes for top-performing agents.</p>
              </div>

              <!-- Feature 8: Daily Commission -->
              <div class="feature-card group">
                <div class="feature-icon">
                  <svg class="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <path d="M24 4C12.954 4 4 12.954 4 24S12.954 44 24 44 44 35.046 44 24 35.046 4 24 4Z" fill="url(#grad8)" stroke="#06e9bb" stroke-width="2"/>
                    <path d="M24 8V40" stroke="#06e9bb" stroke-width="2"/>
                    <path d="M8 24H40" stroke="#06e9bb" stroke-width="2"/>
                    <circle cx="24" cy="24" r="6" fill="#06e9bb" fill-opacity="0.3"/>
                    <circle cx="24" cy="24" r="12" stroke="#06e9bb" stroke-width="1" stroke-dasharray="2 2"/>
                    <defs>
                      <linearGradient id="grad8" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#06e9bb" stop-opacity="0.1"/>
                        <stop offset="1" stop-color="#06e9bb" stop-opacity="0.05"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">Daily Betting Commission</h3>
                <p class="feature-description">Earn daily commission on every bet placed by referrals. Transparent system showing clear earnings in real-time.</p>
              </div>

              <!-- Feature 9: Weekly Bonuses -->
              <div class="feature-card group">
                <div class="feature-icon">
                  <svg class="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <path d="M24 6L30 18H42L32 26L36 38L24 30L12 38L16 26L6 18H18L24 6Z" fill="url(#grad9)" stroke="#06e9bb" stroke-width="2"/>
                    <path d="M24 20V34" stroke="#06e9bb" stroke-width="2"/>
                    <path d="M18 26H30" stroke="#06e9bb" stroke-width="2"/>
                    <circle cx="24" cy="26" r="4" fill="#06e9bb" fill-opacity="0.3"/>
                    <defs>
                      <linearGradient id="grad9" x1="24" y1="6" x2="24" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#06e9bb" stop-opacity="0.2"/>
                        <stop offset="1" stop-color="#06e9bb" stop-opacity="0.05"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">Weekly Bonuses</h3>
                <p class="feature-description">Claim weekly bonuses in cash, spins, or game credits. Easy to claim rewards that keep you motivated to play regularly.</p>
              </div>

              <!-- Feature 10: Attendance Bonus -->
              <div class="feature-card group">
                <div class="feature-icon">
                  <svg class="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="8" width="32" height="32" rx="6" fill="url(#grad10)" stroke="#06e9bb" stroke-width="2"/>
                    <path d="M18 18H30V30H18V18Z" fill="#06e9bb" fill-opacity="0.3"/>
                    <path d="M18 18V30M30 18V30M18 18H30M18 30H30" stroke="#06e9bb" stroke-width="2"/>
                    <circle cx="24" cy="24" r="2" fill="#06e9bb"/>
                    <defs>
                      <linearGradient id="grad10" x1="24" y1="8" x2="24" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#06e9bb" stop-opacity="0.1"/>
                        <stop offset="1" stop-color="#06e9bb" stop-opacity="0.05"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">Attendance Bonus</h3>
                <p class="feature-description">Daily login rewards that add up quickly. Even on busy days, a quick login pays off with generous consistency rewards.</p>
              </div>

              <!-- Feature 11: Super Jackpot -->
              <div class="feature-card group">
                <div class="feature-icon">
                  <svg class="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="18" fill="url(#grad11)" stroke="#06e9bb" stroke-width="2"/>
                    <path d="M24 10V38" stroke="#06e9bb" stroke-width="2"/>
                    <path d="M14 24H34" stroke="#06e9bb" stroke-width="2"/>
                    <circle cx="24" cy="24" r="10" stroke="#06e9bb" stroke-width="1" stroke-dasharray="4 4"/>
                    <circle cx="24" cy="24" r="6" fill="#06e9bb" fill-opacity="0.2"/>
                    <text x="24" y="26" text-anchor="middle" fill="#06e9bb" font-size="8" font-weight="bold">JACKPOT</text>
                    <defs>
                      <linearGradient id="grad11" x1="24" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#06e9bb" stop-opacity="0.2"/>
                        <stop offset="1" stop-color="#06e9bb" stop-opacity="0.05"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">Super Jackpot</h3>
                <p class="feature-description">Win massive prizes weekly with one lucky spin. Open to all players - your dreams could come true with every jackpot.</p>
              </div>

              <!-- Feature 12: Customer Support -->
              <div class="feature-card group">
                <div class="feature-icon">
                  <svg class="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <path d="M24 4C12.954 4 4 12.954 4 24S12.954 44 24 44 44 35.046 44 24 35.046 4 24 4Z" fill="url(#grad12)" stroke="#06e9bb" stroke-width="2"/>
                    <path d="M16 18H32V30H16V18Z" fill="#06e9bb" fill-opacity="0.2"/>
                    <path d="M20 22H28M20 26H24" stroke="#06e9bb" stroke-width="2"/>
                    <circle cx="24" cy="34" r="2" fill="#06e9bb"/>
                    <defs>
                      <linearGradient id="grad12" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#06e9bb" stop-opacity="0.1"/>
                        <stop offset="1" stop-color="#06e9bb" stop-opacity="0.05"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">24/7 Customer Support</h3>
                <p class="feature-description">Available via chat, call, or Telegram. Quick resolution for login or withdrawal issues with friendly local support.</p>
              </div>

              <!-- Feature 13: Payment Methods -->
              <div class="feature-card group">
                <div class="feature-icon">
                  <svg class="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="12" width="32" height="24" rx="4" fill="url(#grad13)" stroke="#06e9bb" stroke-width="2"/>
                    <rect x="12" y="16" width="24" height="4" rx="2" fill="#06e9bb" fill-opacity="0.3"/>
                    <circle cx="24" cy="30" r="6" fill="#06e9bb" fill-opacity="0.2"/>
                    <path d="M20 30H28M24 26V34" stroke="#06e9bb" stroke-width="2"/>
                    <defs>
                      <linearGradient id="grad13" x1="24" y1="12" x2="24" y2="36" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#06e9bb" stop-opacity="0.1"/>
                        <stop offset="1" stop-color="#06e9bb" stop-opacity="0.05"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">Multiple Payment Methods</h3>
                <p class="feature-description">JazzCash, Easypaisa & USDT support. Convenient, secure deposits/withdrawals with flexible options for all users.</p>
              </div>

              <!-- Feature 14: Language Support -->
              <div class="feature-card group">
                <div class="feature-icon">
                  <svg class="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="16" fill="url(#grad14)" stroke="#06e9bb" stroke-width="2"/>
                    <path d="M18 18H30V30H18V18Z" fill="#06e9bb" fill-opacity="0.2"/>
                    <path d="M24 18V30M18 24H30" stroke="#06e9bb" stroke-width="2"/>
                    <text x="24" y="20" text-anchor="middle" fill="#06e9bb" font-size="6" font-weight="bold">EN</text>
                    <text x="24" y="28" text-anchor="middle" fill="#06e9bb" font-size="6" font-weight="bold">اردو</text>
                    <defs>
                      <linearGradient id="grad14" x1="24" y1="8" x2="24" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#06e9bb" stop-opacity="0.1"/>
                        <stop offset="1" stop-color="#06e9bb" stop-opacity="0.05"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">Urdu & English Support</h3>
                <p class="feature-description">Clear instructions in both languages. Switch between Urdu/English for a personalized, local experience.</p>
              </div>
            </div>

            <!-- CTA Button -->
            <div class="text-center mt-10">
              <button class="btn-primary text-lg px-8 py-4" (click)="navigateToRegister()">
                Start Earning with All These Features Now!
              </button>
            </div>
          </section>

          <!-- How to Register -->
          <section id="how-to-register-92pak-game" class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20 mb-8" *ngIf="registrationSteps.length > 0">
            <div class="text-center mb-10">
              <h2 class="text-3xl font-bold text-[#06e9bb] mb-4">How to Start Earning in 3 Minutes: Complete Registration Guide</h2>
              <p class="text-gray-300">Follow these simple steps to unlock your earning potential with {{appInfo?.name || '92 PAK Game'}}</p>
            </div>
            
            <div class="relative">
              <!-- Timeline Connector -->
              <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#06e9bb] to-[#06e9bb]/30 -translate-x-1/2 z-0"></div>
              
              <div class="space-y-12 relative z-10">
                @for (step of registrationSteps; track step.title; let i = $index; let isEven = $even) {
                  <div class="flex flex-col lg:flex-row items-center gap-6 group" [class.lg:flex-row-reverse]="isEven">
                    <!-- Step Number & Icon -->
                    <div class="relative">
                      <div class="w-20 h-20 rounded-full bg-gradient-to-br from-[#06e9bb] to-[#00d4aa] flex items-center justify-center text-2xl font-bold text-[#110d28] shadow-lg shadow-[#06e9bb]/30 group-hover:scale-110 transition-transform duration-300">
                        {{i + 1}}
                      </div>
                      <!-- Step Icon -->
                      <div class="absolute -top-2 -right-2 w-12 h-12 bg-[#110d28] rounded-full border-4 border-[#1a1442] flex items-center justify-center">
                        @switch(i % 4) {
                          @case(0) {
                            <!-- Download Icon -->
                            <svg class="w-6 h-6 text-[#06e9bb]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                            </svg>
                          }
                          @case(1) {
                            <!-- User Icon -->
                            <svg class="w-6 h-6 text-[#06e9bb]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                          }
                          @case(2) {
                            <!-- Wallet Icon -->
                            <svg class="w-6 h-6 text-[#06e9bb]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                            </svg>
                          }
                          @case(3) {
                            <!-- Play Icon -->
                            <svg class="w-6 h-6 text-[#06e9bb]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          }
                        }
                      </div>
                    </div>
                    
                    <!-- Step Content -->
                    <div class="flex-1 bg-[#1a1442] p-6 rounded-xl border border-[#06e9bb]/20 group-hover:border-[#06e9bb]/40 transition-all duration-300" [class.text-right]="isEven">
                      <div class="flex items-center gap-3 mb-3" [class.flex-row-reverse]="isEven">
                        <span class="inline-flex items-center gap-1 px-3 py-1 bg-[#06e9bb]/20 text-[#06e9bb] text-sm font-semibold rounded-full">
                          @switch(i) {
                            @case(0) { Step 1 • Quick Setup }
                            @case(1) { Step 2 • Account Creation }
                            @case(2) { Step 3 • Fund Your Account }
                            @case(3) { Step 4 • Start Earning }
                            @default { Step {{i + 1}} • Get Started }
                          }
                        </span>
                        <span class="text-xs text-gray-400">~2 minutes</span>
                      </div>
                      
                      <h3 class="font-bold text-xl mb-3 text-white group-hover:text-[#06e9bb] transition-colors">{{step.title}}</h3>
                      <p class="text-gray-300 mb-4">{{step.description}}</p>
                      
                      <!-- Action Button -->
                      @if (i === 0) {
                        <button class="inline-flex items-center gap-2 px-4 py-2 bg-[#06e9bb] text-[#110d28] font-semibold rounded-lg hover:bg-[#00d4aa] transition-colors" (click)="navigateToRegister()">
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                          </svg>
                          Download Now
                        </button>
                      }
                      
                      <!-- Tips Box -->
                      @if (step.tips) {
                        <div class="mt-4 p-3 bg-[#06e9bb]/10 rounded-lg border border-[#06e9bb]/20">
                          <div class="flex items-start gap-2">
                            <svg class="w-5 h-5 text-[#06e9bb] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                            </svg>
                            <p class="text-sm text-[#06e9bb]">{{step.tips}}</p>
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                }
              </div>
            </div>

            <!-- Quick Start CTA -->
            <div class="mt-12 p-6 bg-gradient-to-r from-[#06e9bb]/10 to-[#06e9bb]/5 rounded-xl border border-[#06e9bb]/20 text-center">
              <h3 class="font-bold text-xl mb-3 text-[#06e9bb]">Ready to Start Earning?</h3>
              <p class="text-gray-300 mb-6">Thousands of Pakistanis are already earning daily with {{appInfo?.name || '92 PAK Game'}}. Join them now!</p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button class="btn-primary px-8 py-4 text-lg" (click)="navigateToRegister()">
                  <span class="flex items-center justify-center gap-2">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Start Registration Now
                  </span>
                </button>
                <button class="btn-secondary px-8 py-4 text-lg" (click)="scrollToSection($event, 'faq')">
                  <span class="flex items-center justify-center gap-2">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
                    </svg>
                    Read FAQ First
                  </span>
                </button>
              </div>
            </div>
          </section>

          <!-- Game Categories -->
          <section id="game-categories" class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20 mb-8" *ngIf="gameCategories.length > 0">
            <h2 class="text-3xl font-bold text-[#06e9bb] mb-6">Top Game Categories for Maximum Earnings</h2>
            
            <div class="space-y-6">
              @for (category of gameCategories; track category.name) {
                <div class="border-l-4 border-[#06e9bb] pl-4 group hover:border-[#06e9bb]/80 transition-colors">
                  <h3 class="font-bold text-xl mb-3 text-white group-hover:text-[#06e9bb] transition-colors">{{category.name}}</h3>
                  <p class="text-gray-300 mb-3">{{category.description}}</p>
                  <div class="flex flex-wrap gap-2">
                    @for (game of category.games; track game) {
                      <span class="bg-[#06e9bb]/20 text-[#06e9bb] px-3 py-1 rounded-full text-sm border border-[#06e9bb]/30 hover:bg-[#06e9bb] hover:text-[#110d28] transition-colors cursor-pointer">
                        {{game}}
                      </span>
                    }
                  </div>
                </div>
              }
            </div>
          </section>

          <!-- Advanced Earning Strategies -->
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
                    
                    <!-- Strategy Icon -->
                    <div class="mb-4">
                      <div class="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#06e9bb]/10 to-[#06e9bb]/5 border border-[#06e9bb]/20 group-hover:scale-110 transition-transform duration-300">
                        <div [innerHTML]="strategy.icon" class="w-8 h-8 text-[#06e9bb]"></div>
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
                <div class="text-center p-4 bg-[#110d28] rounded-lg">
                  <div class="text-3xl font-bold text-[#06e9bb] mb-2">6%</div>
                  <div class="text-sm text-gray-300">Referral Commission</div>
                </div>
                
                <div class="text-center p-4 bg-[#110d28] rounded-lg">
                  <div class="text-3xl font-bold text-[#06e9bb] mb-2">PKR 500+</div>
                  <div class="text-sm text-gray-300">Daily Average</div>
                </div>
                
                <div class="text-center p-4 bg-[#110d28] rounded-lg">
                  <div class="text-3xl font-bold text-[#06e9bb] mb-2">Instant</div>
                  <div class="text-sm text-gray-300">Withdrawal Time</div>
                </div>
                
                <div class="text-center p-4 bg-[#110d28] rounded-lg">
                  <div class="text-3xl font-bold text-[#06e9bb] mb-2">24/7</div>
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
                <button class="btn-primary px-8 py-4 text-lg group" (click)="navigateToRegister()">
                  <span class="flex items-center justify-center gap-2">
                    <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Start Implementing These Strategies Now
                  </span>
                </button>
                <button class="btn-secondary px-8 py-4 text-lg group" (click)="scrollToSection($event, 'expert-tips')">
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

          <!-- Pro Tips -->
          <section id="expert-tips" class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20 mb-8" *ngIf="proTips.length > 0">
            <h2 class="text-3xl font-bold text-[#06e9bb] mb-6">Expert Tips to Maximize Your {{appInfo?.name || '92 PAK Game'}} Earnings</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              @for (tip of proTips; track tip) {
                <div class="flex items-start group hover:transform hover:translate-x-2 transition-transform">
                  <div class="text-[#06e9bb] mr-3 mt-1 group-hover:scale-125 transition-transform">✓</div>
                  <p class="text-gray-300 group-hover:text-white transition-colors">{{tip}}</p>
                </div>
              }
            </div>
          </section>

          <!-- Pros and Cons -->
          <section id="pros-cons" class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20 mb-8" *ngIf="pros.length > 0 || cons.length > 0">
            <h2 class="text-3xl font-bold text-[#06e9bb] mb-6">Comprehensive Analysis: Pros and Cons</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div *ngIf="pros.length > 0">
                <h3 class="font-bold text-xl mb-4 text-[#06e9bb]">Advantages</h3>
                <ul class="space-y-2">
                  @for (pro of pros; track pro) {
                    <li class="flex items-start group">
                      <span class="text-[#06e9bb] mr-2 mt-1 group-hover:scale-125 transition-transform">✓</span>
                      <span class="text-gray-300 group-hover:text-white transition-colors">{{pro}}</span>
                    </li>
                  }
                </ul>
              </div>
              
              <div *ngIf="cons.length > 0">
                <h3 class="font-bold text-xl mb-4 text-[#06e9bb]">Considerations</h3>
                <ul class="space-y-2">
                  @for (con of cons; track con) {
                    <li class="flex items-start group">
                      <span class="text-[#06e9bb] mr-2 mt-1 group-hover:scale-125 transition-transform">✗</span>
                      <span class="text-gray-300 group-hover:text-white transition-colors">{{con}}</span>
                    </li>
                  }
                </ul>
              </div>
            </div>
          </section>

          <!-- Reviews -->
          <section id="user-reviews" class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20 mb-8">
            <h2 class="text-3xl font-bold text-[#06e9bb] mb-6">Authentic User Reviews and Testimonials</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-[#1a1442] p-6 rounded-lg border border-[#06e9bb]/20 hover:border-[#06e9bb]/40 transition-colors">
                <h3 class="font-bold text-lg mb-3 text-[#06e9bb]">Expert Review</h3>
                <p class="text-gray-300 italic mb-4">
                  {{reviews?.personal || "92 PAK Game stands out as Pakistan's most promising earning app in 2025. The platform's seamless integration with local payment methods like JazzCash and Easypaisa, combined with diverse gaming options from color prediction to lottery, creates unparalleled earning potential. The 6% referral commission structure is particularly lucrative for serious earners."}}
                </p>
              </div>
              
              <div class="bg-[#1a1442] p-6 rounded-lg border border-[#06e9bb]/20 hover:border-[#06e9bb]/40 transition-colors">
                <h3 class="font-bold text-lg mb-3 text-[#06e9bb]">User Success Story</h3>
                <p class="text-gray-300 italic">
                  {{reviews?.user?.text || "I've tried multiple earning apps in Pakistan, but 92 PAK Game delivers real results. The instant JazzCash withdrawals and daily bonus system helped me earn consistently. The color prediction games are both entertaining and profitable when you understand the patterns."}}
                </p>
                <p class="text-[#06e9bb] mt-3 font-semibold">{{reviews?.user?.author || "- Ahmed Raza, Lahore"}}</p>
              </div>
            </div>
          </section>

          <!-- FAQ Section -->
          <section id="faq" class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20" *ngIf="faqs.length > 0">
            <h2 class="text-3xl font-bold text-[#06e9bb] mb-6">Frequently Asked Questions (FAQ)</h2>
            
            <div class="space-y-6">
              @for (faq of faqs; track faq.question) {
                <div class="border-b border-[#06e9bb]/20 pb-6 last:border-b-0 group">
                  <h3 class="font-semibold text-lg text-white mb-3 group-hover:text-[#06e9bb] transition-colors">{{faq.question}}</h3>
                  <p class="text-gray-300">{{faq.answer}}</p>
                </div>
              }
            </div>
          </section>
        </article>
      </div>
    </div>

    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
      {{ getArticleStructuredData() | json }}
    </script>

    <!-- HowTo Structured Data -->
    <script type="application/ld+json">
      {{ getStructuredData() | json }}
    </script>

    <!-- FAQ Structured Data -->
    <script type="application/ld+json">
      {{ getFAQStructuredData() | json }}
    </script>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  private configSubscription?: Subscription;
  
  // Data from config with safe defaults
  appInfo: any = {};
  heroContent: any = {};
  registrationSteps: any[] = [];
  features: any[] = [];
  gameCategories: any[] = [];
  earningStrategies: any[] = [];
  proTips: string[] = [];
  pros: string[] = [];
  cons: string[] = [];
  faqs: any[] = [];
  tableOfContents: Array<{title: string, id: string}> = [];
  reviews: any = {};
  links: any = {};

  // Default earning strategies
  private defaultEarningStrategies = [
    {
      title: 'Referral Commission Mastery',
      description: 'Earn 6% commission on every deposit made by your referred users. Build a network of 100+ active users for passive income.',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>`,
      earningPotential: 'PKR 15,000+ Monthly',
      difficulty: 'Easy',
      tip: 'Share your referral code on social media groups'
    },
    {
      title: 'Color Prediction Pro Strategy',
      description: 'Master the color prediction algorithm with our proven betting patterns. Increase win rate to 65%+ with strategic betting.',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58s4.1-.78 5.66-2.34c3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"/>
      </svg>`,
      earningPotential: 'PKR 1,000+ Daily',
      difficulty: 'Medium',
      tip: 'Start with small bets to understand patterns'
    },
    {
      title: 'Agent Network Building',
      description: 'Recruit sub-agents and earn additional 2% commission on their network. Scale your earnings exponentially.',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>`,
      earningPotential: 'PKR 30,000+ Monthly',
      difficulty: 'Hard',
      tip: 'Focus on recruiting motivated individuals'
    },
    {
      title: 'Daily Bonus Optimization',
      description: 'Maximize daily login, attendance, and game completion bonuses. Never miss a bonus opportunity.',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>`,
      earningPotential: 'PKR 500+ Daily',
      difficulty: 'Easy',
      tip: 'Set daily reminders for bonus collection'
    },
    {
      title: 'Weekly Tournament Domination',
      description: 'Compete in weekly tournaments for massive cash prizes and exclusive rewards. Top 10 rankings guaranteed earnings.',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
      </svg>`,
      earningPotential: 'PKR 5,000+ Weekly',
      difficulty: 'Medium',
      tip: 'Participate in all weekly events'
    },
    {
      title: 'VIP Level Advancement',
      description: 'Advance through VIP levels for higher commission rates, exclusive games, and premium support.',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>`,
      earningPotential: 'PKR 20,000+ Monthly',
      difficulty: 'Medium',
      tip: 'Consistent activity increases VIP points faster'
    }
  ];

  constructor(
    private seoService: SeoService,
    private configService: ConfigService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Load configuration first
    this.configSubscription = this.configService.loadConfig().subscribe({
      next: (config) => {
        this.loadConfigData(config);
        // Set SEO after config is loaded
        this.seoService.setPageSeo('home');
        
        // Handle initial hash if present
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
    // Check if there's a hash in the URL and scroll to it
    if (isPlatformBrowser(this.platformId)) {
      const hash = window.location.hash.substring(1);
      if (hash) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          this.scrollToSection(null, hash);
        }, 100);
      }
    }
  }

  private loadConfigData(config: any): void {
    this.appInfo = config.app || {};
    this.heroContent = config.content?.hero || {};
    this.registrationSteps = config.content?.registrationSteps || [];
    this.features = config.content?.features || [];
    this.gameCategories = config.content?.gameCategories || [];
    this.earningStrategies = config.content?.earningStrategies || this.defaultEarningStrategies;
    this.proTips = config.content?.proTips || [];
    this.pros = config.content?.pros || [];
    this.cons = config.content?.cons || [];
    this.faqs = config.content?.faqs || [];
    this.reviews = config.content?.reviews || {};
    this.links = config.links || {};
    
    // Handle table of contents format (support both string array and object array)
    const tocConfig = config.navigation?.tableOfContents || [];
    if (tocConfig.length > 0) {
      if (typeof tocConfig[0] === 'string') {
        // Old format: array of strings - convert to object array
        this.tableOfContents = (tocConfig as string[]).map(title => ({
          title,
          id: this.generateSectionId(title)
        }));
      } else {
        // New format: array of objects
        this.tableOfContents = tocConfig as Array<{title: string, id: string}>;
      }
    } else {
      // Create default table of contents aligned with current sections
      this.createDefaultTableOfContents();
    }
  }

  private createDefaultTableOfContents(): void {
    // Updated to match the exact sections in the template in the correct order
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
    // Generate consistent ID from title for SEO
    return title.toLowerCase()
      .replace(/92 pak game/gi, '92pak-game')
      .replace(/92 pak/gi, '92pak')
      .replace(/real money earning app/gi, 'earning-app')
      .replace(/complete overview/gi, 'overview')
      .replace(/how to/gi, 'how-to')
      .replace(/maximum earnings/gi, 'earnings')
      .replace(/partner rewards program/gi, 'rewards-program')
      .replace(/pros and cons/gi, 'pros-cons')
      .replace(/user reviews/gi, 'reviews')
      .replace(/frequently asked questions/gi, 'faq')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  private loadDefaultData(): void {
    // Load default data directly
    this.appInfo = this.configService.getAppInfo();
    this.heroContent = this.configService.getContent().hero;
    this.registrationSteps = this.configService.getContent().registrationSteps;
    this.features = this.configService.getContent().features;
    this.gameCategories = this.configService.getContent().gameCategories;
    this.earningStrategies = this.defaultEarningStrategies;
    this.proTips = this.configService.getContent().proTips;
    this.pros = this.configService.getContent().pros;
    this.cons = this.configService.getContent().cons;
    this.faqs = this.configService.getContent().faqs;
    this.reviews = this.configService.getContent().reviews;
    this.links = this.configService.getLinks();
    
    // Create default table of contents aligned with current sections
    this.createDefaultTableOfContents();
  }

  getStars(difficulty: string): string[] {
    const stars = [];
    switch(difficulty) {
      case 'Easy':
        stars.push('full', 'empty', 'empty');
        break;
      case 'Medium':
        stars.push('full', 'full', 'empty');
        break;
      case 'Hard':
        stars.push('full', 'full', 'full');
        break;
      default:
        stars.push('full', 'empty', 'empty');
    }
    return stars;
  }

  scrollToSection(event: Event | null, sectionId: string): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update URL hash without triggering scroll
      history.replaceState(null, '', window.location.pathname + '#' + sectionId);
    } else {
      console.warn(`Section with ID "${sectionId}" not found`);
      // Try to find section by approximate matching
      const allSections = document.querySelectorAll('section[id], h2, h3');
      for (const section of Array.from(allSections)) {
        const id = section.id || section.getAttribute('id');
        const text = section.textContent?.toLowerCase().trim();
        if (id && (id.includes(sectionId) || sectionId.includes(id))) {
          const headerOffset = 100;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          history.replaceState(null, '', window.location.pathname + '#' + id);
          return;
        }
      }
    }
  }

  navigateToRegister(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Use the registration link from configuration
    if (this.links?.register && this.links.register !== '#') {
      window.open(this.links.register, '_blank', 'noopener,noreferrer');
    } else if (this.links?.download?.android && this.links.download.android !== '#') {
      // Fallback to download link if register link is not available
      window.open(this.links.download.android, '_blank', 'noopener,noreferrer');
    } else {
      console.warn('Register/Download link not configured');
    }
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    
    // Find and show fallback
    const parent = img.parentElement;
    if (parent) {
      const fallback = parent.querySelector('[class*="fallback"]') as HTMLElement;
      if (fallback) {
        fallback.style.display = 'flex';
      }
    }
  }

  getStructuredData() {
    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": `How to Register and Earn Money with ${this.appInfo?.name || '92 PAK Game'} in Pakistan 2025`,
      "description": "Complete step-by-step guide to download APK, register account, deposit money and start earning real cash through JazzCash & Easypaisa",
      "image": "https://92pakgame.com/assets/images/92pak-game-registration-guide-2025.webp",
      "totalTime": "PT3M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "PKR",
        "value": this.appInfo?.minDeposit?.replace('PKR', '')?.trim() || "100"
      },
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Android smartphone (version 6.0+)"
        },
        {
          "@type": "HowToSupply",
          "name": "Stable internet connection"
        },
        {
          "@type": "HowToSupply",
          "name": "Active JazzCash or Easypaisa account"
        }
      ],
      "step": this.registrationSteps.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.title,
        "text": step.description,
        "image": `https://92pakgame.com/assets/images/92pak-game-step-${index + 1}-2025.webp`,
        "url": `https://92pakgame.com/#how-to-register-92pak-game`
      })),
      "tool": [
        {
          "@type": "HowToTool",
          "name": `${this.appInfo?.name || '92 PAK Game'} APK File`
        },
        {
          "@type": "HowToTool", 
          "name": "JazzCash or Easypaisa Mobile App"
        }
      ],
      "performTime": "PT2M",
      "prepTime": "PT1M"
    };
  }

  getArticleStructuredData() {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": this.heroContent?.title || '92 PAK Game APK Download 2025 - Top Real Money Earning App in Pakistan',
      "description": this.heroContent?.description || 'Complete guide to 92 PAK Game - learn how to download APK, register, play color prediction games, and earn real money through JazzCash and Easypaisa in Pakistan 2025',
      "author": {
        "@type": "Organization",
        "name": this.appInfo?.name || '92 PAK Game',
        "url": "https://92pakgame.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": this.appInfo?.name || '92 PAK Game',
        "logo": {
          "@type": "ImageObject",
          "url": "https://92pakgame.com/assets/images/92pak-game-logo-official-2025.webp",
          "width": "144",
          "height": "144"
        }
      },
      "datePublished": "2024-12-01",
      "dateModified": new Date().toISOString().split('T')[0],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://92pakgame.com"
      },
      "image": [
        "https://92pakgame.com/assets/images/92pak-game-home-banner-2025.webp",
        "https://92pakgame.com/assets/images/92pak-game-featured-games-preview.webp"
      ],
      "articleSection": [
        "Mobile Gaming",
        "Earning Apps",
        "Pakistan",
        "Real Money Games",
        "Color Prediction",
        "JazzCash Withdrawal",
        "Easypaisa"
      ],
      "keywords": "92 pak game, earning app Pakistan, real money games, color prediction, jazzcash withdrawal, easypaisa, 2025, pakistan earning app, mobile gaming, apk download"
    };
  }

  getFAQStructuredData() {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": this.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }
}