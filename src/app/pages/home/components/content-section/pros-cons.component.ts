// src/app/pages/home/components/content-section/pros-cons.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pros-cons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="pros-cons" class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20 mb-8" *ngIf="pros.length > 0 || cons.length > 0">
      <h2 class="text-3xl font-bold text-[#06e9bb] mb-6">Comprehensive Analysis: Pros and Cons</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div *ngIf="pros.length > 0">
          <h3 class="font-bold text-xl mb-4 text-[#06e9bb]">Advantages</h3>
          <ul class="space-y-2">
            @for (pro of pros; track pro) {
              <li class="flex items-start group">
                <span class="text-[#06e9bb] mr-2 mt-1 group-hover:scale-125 transition-transform">✓</span>
                <span class="text-gray-300 group-hover:text-white transition-colors">{{pro}}</span>
              </li>
            }
          </ul>
        </div>
        
        <div *ngIf="cons.length > 0">
          <h3 class="font-bold text-xl mb-4 text-[#06e9bb]">Considerations</h3>
          <ul class="space-y-2">
            @for (con of cons; track con) {
              <li class="flex items-start group">
                <span class="text-[#06e9bb] mr-2 mt-1 group-hover:scale-125 transition-transform">✗</span>
                <span class="text-gray-300 group-hover:text-white transition-colors">{{con}}</span>
              </li>
            }
          </ul>
        </div>
      </div>
    </section>
  `
})
export class ProsConsComponent {
  @Input() pros: string[] = [];
  @Input() cons: string[] = [];
}