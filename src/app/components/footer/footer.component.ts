// src/app/components/footer/footer.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="gradient-bg border-t border-[#06e9bb]/20">
      <div class="container mx-auto px-4 py-6">
        <!-- Top Row: Logo, Links, Copyright -->
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <!-- Brand Info -->
          <div class="flex items-center gap-3">
            <div class="bg-white/5 backdrop-blur-md rounded-xl p-2 border border-[#06e9bb]/20">
              <picture>
                <source srcset="assets/images/92pak-game-logo-sm-2025.webp" type="image/webp">
                <img 
                  src="assets/images/92pak-game-logo-sm-2025.png" 
                  alt="92 PAK Game Logo"
                  class="w-8 h-8 md:w-10 md:h-10"
                >
              </picture>
            </div>
            <div>
              <p class="text-xs md:text-sm text-gray-400">Real Money Earning App</p>
            </div>
          </div>

          <!-- Quick Links - Horizontal -->
          <div class="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <a *ngFor="let link of footerLinks"
               [routerLink]="[link.route]" 
               class="text-gray-400 hover:text-[#06e9bb] transition-colors text-sm md:text-base">
              {{link.label}}
            </a>
          </div>

          <!-- Copyright -->
          <div class="text-center">
            <p class="text-gray-400 text-sm">
              &copy; {{currentYear}} 92 PAK Game
            </p>
          </div>
        </div>

        <!-- Tagline Row -->
        <div class="mt-4 pt-4 border-t border-[#06e9bb]/10 text-center">
          <p class="text-gray-500 text-sm">
            {{config?.footer?.tagline || 'Play, Earn, Win - Your Gateway to Exciting Rewards'}}
          </p>
          <p class="text-gray-500 text-xs mt-2">
            This is an independent platform. All trademarks are property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent implements OnInit {
  config: any = {};
  footerLinks: any[] = [];
  currentYear = new Date().getFullYear();

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.config = this.configService.getConfig();
    this.footerLinks = this.config?.navigation?.footerLinks || [];
  }
}