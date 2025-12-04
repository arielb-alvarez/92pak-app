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
      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Brand Info -->
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-white/5 backdrop-blur-md rounded-xl p-2 border border-[#06e9bb]/20">
                <img 
                  src="assets/images/92pak-game-logo-official-2025.png" 
                  alt="92 PAK Game Logo"
                  class="w-10 h-10"
                >
              </div>
              <div>
                <h3 class="text-lg font-bold text-white">{{config?.app?.name || '92PAK'}}</h3>
                <p class="text-sm text-gray-400">Real Money Earning App</p>
              </div>
            </div>
            <p class="text-gray-400 text-sm">
              {{config?.footer?.companyInfo || 'Pakistan\'s leading real money earning platform'}}
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul class="space-y-2">
              <li *ngFor="let link of footerLinks">
                <a [routerLink]="[link.route]" 
                   class="text-gray-400 hover:text-[#06e9bb] transition-colors">
                  {{link.label}}
                </a>
              </li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <h4 class="font-bold text-lg mb-4 text-white">Support</h4>
            <ul class="space-y-2">
              <li>
                <a [href]="config?.links?.support?.telegram || '#'" 
                   target="_blank"
                   class="text-gray-400 hover:text-[#06e9bb] transition-colors flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
                  </svg>
                  Telegram Support
                </a>
              </li>
              <li>
                <a [href]="'mailto:' + (config?.links?.support?.email || 'support@92pakgame.com')" 
                   class="text-gray-400 hover:text-[#06e9bb] transition-colors flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Email Support
                </a>
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h4 class="font-bold text-lg mb-4 text-white">Legal</h4>
            <ul class="space-y-2">
              <li>
                <a [routerLink]="['/privacy']" class="text-gray-400 hover:text-[#06e9bb] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a [routerLink]="['/terms']" class="text-gray-400 hover:text-[#06e9bb] transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a [routerLink]="['/disclaimer']" class="text-gray-400 hover:text-[#06e9bb] transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-[#06e9bb]/10 mt-8 pt-8 text-center">
          <p class="text-gray-400 text-sm">
            &copy; {{currentYear}} {{config?.app?.name || '92 PAK Game'}}. {{config?.footer?.tagline || 'All rights reserved.'}}
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