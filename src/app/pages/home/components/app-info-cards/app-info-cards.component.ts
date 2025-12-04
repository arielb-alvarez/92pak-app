// src/app/pages/home/components/app-info-cards/app-info-cards.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-info-cards',
  standalone: true,
  imports: [CommonModule],
  template: `
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
  `
})
export class AppInfoCardsComponent {
  @Input() appInfo: any = {};
}