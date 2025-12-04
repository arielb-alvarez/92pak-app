// src/app/pages/home/components/content-section/premium-features.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesGridComponent } from './features-grid.component';

@Component({
  selector: 'app-premium-features',
  standalone: true,
  imports: [CommonModule, FeaturesGridComponent],
  template: `
    <section id="premium-features" class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20 mb-8">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-[#06e9bb] mb-4">Premium Features of {{appInfo?.name || '92 PAK'}} Real Earning App</h2>
        <p class="text-gray-300">Discover what makes {{appInfo?.name || '92 PAK'}} the top choice for Pakistani earners in 2025</p>
      </div>

      <!-- Features Stats -->
      <div class="mb-10 p-6 bg-gradient-to-r from-[#06e9bb]/10 to-[#06e9bb]/5 rounded-xl border border-[#06e9bb]/20">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div class="text-2xl font-bold text-[#06e9bb]">14+</div>
            <div class="text-sm text-gray-300">Premium Features</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-[#06e9bb]">24/7</div>
            <div class="text-sm text-gray-300">Customer Support</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-[#06e9bb]">Instant</div>
            <div class="text-sm text-gray-300">Withdrawals</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-[#06e9bb]">6%</div>
            <div class="text-sm text-gray-300">Referral Commission</div>
          </div>
        </div>
      </div>

      <!-- Use FeaturesGridComponent -->
      <app-features-grid [features]="features"></app-features-grid>

      <!-- CTA Button -->
      <div class="text-center mt-10">
        <button class="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform" (click)="register.emit()">
          <span class="flex items-center justify-center gap-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Start Earning with All These Features Now!
          </span>
        </button>
      </div>
    </section>
  `
})
export class PremiumFeaturesComponent {
  @Input() appInfo: any = {};
  @Input() features: any[] = [];
  @Output() register = new EventEmitter<void>();
}