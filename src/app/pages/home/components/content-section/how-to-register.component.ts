// src/app/pages/home/components/content-section/how-to-register.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-to-register',
  standalone: true,
  imports: [CommonModule],
  template: `
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
                  <button class="inline-flex items-center gap-2 px-4 py-2 bg-[#06e9bb] text-[#110d28] font-semibold rounded-lg hover:bg-[#00d4aa] transition-colors" (click)="register.emit()">
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
          <button class="btn-primary px-8 py-4 text-lg" (click)="register.emit()">
            <span class="flex items-center justify-center gap-2">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Start Registration Now
            </span>
          </button>
          <button class="btn-secondary px-8 py-4 text-lg" (click)="scrollToSection.emit('faq')">
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
  `
})
export class HowToRegisterComponent {
  @Input() appInfo: any = {};
  @Input() registrationSteps: any[] = [];
  @Output() register = new EventEmitter<void>();
  @Output() scrollToSection = new EventEmitter<string>();
}