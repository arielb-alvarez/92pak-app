// src/app/pages/home/components/content-section/expert-tips.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expert-tips',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="expert-tips" class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20 mb-8" *ngIf="proTips.length > 0">
      <h2 class="text-3xl font-bold text-[#06e9bb] mb-6">Expert Tips to Maximize Your {{appInfo?.name || '92 PAK Game'}} Earnings</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        @for (tip of proTips; track tip) {
          <div class="flex items-start group hover:transform hover:translate-x-2 transition-transform">
            <div class="text-[#06e9bb] mr-3 mt-1 group-hover:scale-125 transition-transform">✓</div>
            <p class="text-gray-300 group-hover:text-white transition-colors">{{tip}}</p>
          </div>
        }
      </div>
    </section>
  `
})
export class ExpertTipsComponent {
  @Input() appInfo: any = {};
  @Input() proTips: string[] = [];
}