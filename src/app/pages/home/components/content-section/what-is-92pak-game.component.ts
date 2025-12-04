// src/app/pages/home/components/content-section/what-is-92pak-game.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-what-is-92pak-game',
  standalone: true,
  imports: [CommonModule],
  template: `
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
            [alt]="'Top earning games on ' + (appInfo?.name || '92 PAK Game') + ' - Color Prediction & Lottery'"
            title="Popular Money Earning Games in Pakistan 2025"
            loading="lazy"
            width="1200"
            height="600"
            (error)="imageError.emit($event)"
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
  `
})
export class WhatIs92PakGameComponent {
  @Input() appInfo: any = {};
  @Output() imageError = new EventEmitter<Event>();
}