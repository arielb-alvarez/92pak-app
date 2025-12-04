// src/app/components/header/header.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="gradient-bg border-b border-[#06e9bb]/20 sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <a [routerLink]="['/']" class="flex items-center gap-3">
            <div class="bg-white/5 backdrop-blur-md rounded-xl p-2 border border-[#06e9bb]/20">
              <img 
                src="assets/images/92pak-game-logo-official-2025.png" 
                alt="92 PAK Game Logo"
                class="w-10 h-10"
              >
            </div>
            <div>
              <h1 class="text-xl font-bold text-white">{{appInfo?.name || '92PAK'}}</h1>
              <p class="text-xs text-[#06e9bb]">Real Money Earning App</p>
            </div>
          </a>

          <!-- Register Button -->
          <button class="btn-primary" (click)="navigateToRegister()">
            Register/Login
          </button>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent implements OnInit {
  appInfo: any = {};
  links: any = {};

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    const config = this.configService.getConfig();
    this.appInfo = config?.app || {};
    this.links = config?.links || {};
  }

  navigateToRegister(): void {
    if (this.links?.register && this.links.register !== '#') {
      window.open(this.links.register, '_blank', 'noopener,noreferrer');
    } else if (this.links?.download?.android && this.links.download.android !== '#') {
      window.open(this.links.download.android, '_blank', 'noopener,noreferrer');
    }
  }
}