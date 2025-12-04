// src/app/pages/home/components/content-section/introduction.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20 mb-8">
      <p class="mb-6">
        <picture>
          <source srcset="assets/images/92pak-game-home-banner-2025.webp" type="image/webp">
          <source srcset="assets/images/92pak-game-home-banner-2025.png" type="image/png">
          <img 
            class="rounded-xl w-full h-auto"
            src="assets/images/92pak-game-home-banner-2025.png"
            [alt]="appInfo?.name || '92 PAK Game' + ' - Real Money Earning App Interface'"
            [title]="appInfo?.name || '92 PAK' + ' Real Money Earning Platform 2025'"
            loading="lazy"
            width="1200"
            height="630"
            (error)="imageError.emit($event)"
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
  `
})
export class IntroductionComponent {
  @Input() appInfo: any = {};
  @Output() imageError = new EventEmitter<Event>();
}