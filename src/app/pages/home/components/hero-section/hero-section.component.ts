// src/app/pages/home/components/hero-section/hero-section.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInfoCardsComponent } from '../app-info-cards/app-info-cards.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, AppInfoCardsComponent],
  template: `
    <section class="gradient-bg py-16 relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2306e9bb%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div class="w-full px-4"> <!-- Remove container class -->
        <div class="mx-auto max-w-7xl relative z-10"> <!-- Use max-w-7xl for consistency -->
            <!-- Rest of the hero content remains the same -->
            <div class="flex flex-col lg:flex-row items-center gap-8">
            
            <!-- Left Side - Content -->
            <div class="flex-1 text-center lg:text-left">
                <!-- Logo -->
                <div class="mb-8 flex justify-center lg:justify-start">
                <div class="bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10">
                    <picture>
                    <source srcset="assets/images/92pak-game-logo-official-2025.webp" type="image/webp">
                    <source srcset="assets/images/92pak-game-logo-official-2025.png" type="image/png">
                    <img 
                        [src]="'assets/images/92pak-game-logo-official-2025.png'"
                        [alt]="appInfo?.name + ' - Official Real Money Earning App Logo 2025'"
                        class="w-36 h-36 object-contain rounded-xl"
                        [title]="appInfo?.name + ' - Best Earning App in Pakistan'"
                        width="144"
                        height="144"
                        loading="eager"
                        (error)="onImageError($event)"
                    >
                    </picture>
                    <div class="w-36 h-36 bg-[#06e9bb] rounded-xl flex items-center justify-center text-[#110d28] font-bold text-xl hidden">
                    {{appInfo?.name || '92 PAK'}}
                    </div>
                </div>
                </div>

                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {{heroContent?.title || '92 PAK Game APK Download 2025'}}<br>
                <span class="text-[#06e9bb]">{{heroContent?.subtitle || 'Top Real Money Earning App in Pakistan'}}</span>
                </h1>
                
                <p class="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                {{heroContent?.description || 'Discover how 92 PAK Game transforms mobile gaming into real cash earnings in Pakistan.'}}
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button class="btn-primary text-lg px-8 py-4" (click)="register.emit()">
                    {{heroContent?.ctaButton || 'Download APK & Start Earning'}}
                </button>
                </div>
            </div>

            <!-- Right Side - App Info Cards -->
            <div class="flex-1 w-full max-w-md xl:max-w-lg"> <!-- Increased max width -->
                <app-app-info-cards [appInfo]="appInfo"></app-app-info-cards>
            </div>
            
            </div>
        </div>
        </div>
    </section>
  `
})
export class HeroSectionComponent {
  @Input() appInfo: any = {};
  @Input() heroContent: any = {};
  @Output() register = new EventEmitter<void>();
  @Output() imageError = new EventEmitter<Event>();

  onImageError(event: Event): void {
    this.imageError.emit(event);
  }
}