// src/app/pages/home/components/content-section/features-grid.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      @for (feature of getFeatures(); track feature.title; let i = $index) {
        <div class="feature-card group">
          <div class="feature-icon">
            <ng-container [ngSwitch]="i">
              <!-- Feature 1: New Real Earning App -->
              <svg *ngSwitchCase="0" class="w-12 h-12" viewBox="0 0 48 48" fill="none">
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

              <!-- Feature 2: Simple Interface -->
              <svg *ngSwitchCase="1" class="w-12 h-12" viewBox="0 0 48 48" fill="none">
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

              <!-- Feature 3: Fast Transactions -->
              <svg *ngSwitchCase="2" class="w-12 h-12" viewBox="0 0 48 48" fill="none">
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

              <!-- Feature 4: Exclusive Bonuses -->
              <svg *ngSwitchCase="3" class="w-12 h-12" viewBox="0 0 48 48" fill="none">
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

              <!-- Feature 5: Fast Withdrawals -->
              <svg *ngSwitchCase="4" class="w-12 h-12" viewBox="0 0 48 48" fill="none">
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

              <!-- Feature 6: 6% Agent Salary -->
              <svg *ngSwitchCase="5" class="w-12 h-12" viewBox="0 0 48 48" fill="none">
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

              <!-- Feature 7: Rich Prizes -->
              <svg *ngSwitchCase="6" class="w-12 h-12" viewBox="0 0 48 48" fill="none">
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

              <!-- Feature 8: Daily Commission -->
              <svg *ngSwitchCase="7" class="w-12 h-12" viewBox="0 0 48 48" fill="none">
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

              <!-- Feature 9: Weekly Bonuses -->
              <svg *ngSwitchCase="8" class="w-12 h-12" viewBox="0 0 48 48" fill="none">
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

              <!-- Feature 10: Attendance Bonus -->
              <svg *ngSwitchCase="9" class="w-12 h-12" viewBox="0 0 48 48" fill="none">
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

              <!-- Feature 11: Super Jackpot -->
              <svg *ngSwitchCase="10" class="w-12 h-12" viewBox="0 0 48 48" fill="none">
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

              <!-- Feature 12: Customer Support -->
              <svg *ngSwitchCase="11" class="w-12 h-12" viewBox="0 0 48 48" fill="none">
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

              <!-- Feature 13: Payment Methods -->
              <svg *ngSwitchCase="12" class="w-12 h-12" viewBox="0 0 48 48" fill="none">
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

              <!-- Feature 14: Language Support -->
              <svg *ngSwitchCase="13" class="w-12 h-12" viewBox="0 0 48 48" fill="none">
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
            </ng-container>
          </div>
          <h3 class="feature-title">{{feature.title}}</h3>
          <p class="feature-description">{{feature.description}}</p>
        </div>
      }
    </div>
  `
})
export class FeaturesGridComponent {
  @Input() features: any[] = [];

  // Default features if none provided
  private defaultFeatures = [
    {
      title: 'New Real Earning App',
      description: 'Fresh real money app transforming gaming in Pakistan. Every game offers tangible rewards with quick withdrawals to local wallets.'
    },
    {
      title: 'Simple & Smooth Interface',
      description: 'Clean design with intuitive navigation. Clear icons guide you without overwhelming ads, perfect for beginners and pros alike.'
    },
    {
      title: 'Fast & Secure Transactions',
      description: 'Top-notch encryption for financial safety. Quick JazzCash & Easypaisa transactions with personal details protected.'
    },
    {
      title: 'Exclusive Bonuses & Rewards',
      description: 'Daily login bonuses, welcome rewards, and special event prizes. Tailored rewards that feel like opening gifts every day.'
    },
    {
      title: 'Withdraw Fast, Safe & Stable',
      description: 'No minimum limits with instant JazzCash/Easypaisa transfers. Stable, secure withdrawals processed within hours.'
    },
    {
      title: '6% Agent Salary',
      description: 'Earn 6% commission on user deposits. Passive income grows as your referral network expands - share and earn!'
    },
    {
      title: 'Rich Prizes for Agents',
      description: 'Win BMW cars, gold, or cash rewards. Regular contests with life-changing prizes for top-performing agents.'
    },
    {
      title: 'Daily Betting Commission',
      description: 'Earn daily commission on every bet placed by referrals. Transparent system showing clear earnings in real-time.'
    },
    {
      title: 'Weekly Bonuses',
      description: 'Claim weekly bonuses in cash, spins, or game credits. Easy to claim rewards that keep you motivated to play regularly.'
    },
    {
      title: 'Attendance Bonus',
      description: 'Daily login rewards that add up quickly. Even on busy days, a quick login pays off with generous consistency rewards.'
    },
    {
      title: 'Super Jackpot',
      description: 'Win massive prizes weekly with one lucky spin. Open to all players - your dreams could come true with every jackpot.'
    },
    {
      title: '24/7 Customer Support',
      description: 'Available via chat, call, or Telegram. Quick resolution for login or withdrawal issues with friendly local support.'
    },
    {
      title: 'Multiple Payment Methods',
      description: 'JazzCash, Easypaisa & USDT support. Convenient, secure deposits/withdrawals with flexible options for all users.'
    },
    {
      title: 'Urdu & English Support',
      description: 'Clear instructions in both languages. Switch between Urdu/English for a personalized, local experience.'
    }
  ];

  getFeatures(): any[] {
    return this.features && this.features.length > 0 ? this.features : this.defaultFeatures;
  }
}