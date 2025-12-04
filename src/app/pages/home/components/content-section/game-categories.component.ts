// src/app/pages/home/components/content-section/game-categories.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-categories',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="game-categories" class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20 mb-8" *ngIf="gameCategories.length > 0">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-[#06e9bb] mb-4">Top Game Categories for Maximum Earnings</h2>
        <p class="text-gray-300 max-w-3xl mx-auto">Choose from these exciting game categories that offer the highest earning potential in Pakistan</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (category of gameCategories; track category.name; let i = $index) {
          <div class="group relative overflow-hidden rounded-xl border border-[#06e9bb]/20 bg-gradient-to-b from-[#1a1442] to-[#110d28] hover:border-[#06e9bb]/40 hover:transform hover:-translate-y-2 transition-all duration-300">
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-5">
              <div class="absolute inset-0" [style.backgroundImage]="'radial-gradient(circle at ' + (30 + i*20) + '% ' + (40 + i*15) + '%, #06e9bb 1px, transparent 1px)'" 
                   [style.backgroundSize]="'40px 40px'"></div>
            </div>
            
            <!-- Category Header -->
            <div class="relative p-6">
              <!-- Category Icon -->
              <div class="mb-4 flex items-center justify-between">
                <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#06e9bb]/20 to-[#06e9bb]/10 border border-[#06e9bb]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div class="w-8 h-8 text-[#06e9bb]">
                    @switch(i % 4) {
                      @case(0) {
                        <!-- Color Prediction Icon -->
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                      }
                      @case(1) {
                        <!-- Lottery Icon -->
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      }
                      @case(2) {
                        <!-- Card Icon -->
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                        </svg>
                      }
                      @case(3) {
                        <!-- Dice Icon -->
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"/>
                        </svg>
                      }
                    }
                  </div>
                </div>
                <span class="text-xs px-3 py-1 bg-[#06e9bb]/20 text-[#06e9bb] rounded-full font-semibold">
                  {{i + 1}}/{{gameCategories.length}}
                </span>
              </div>
              
              <!-- Category Title -->
              <h3 class="font-bold text-xl mb-3 text-white group-hover:text-[#06e9bb] transition-colors">{{category.name}}</h3>
              
              <!-- Category Description -->
              <p class="text-gray-300 mb-4 text-sm leading-relaxed">{{category.description}}</p>
              
              <!-- Earning Potential -->
              <div class="flex items-center justify-between mb-4 p-3 bg-[#110d28] rounded-lg border border-[#06e9bb]/10">
                <span class="text-sm text-gray-400">Earning Potential:</span>
                <span class="text-[#06e9bb] font-bold">{{category.earningPotential || 'High'}}</span>
              </div>
              
              <!-- Game Tags -->
              <div class="flex flex-wrap gap-2">
                @for (game of category.games; track game; let isFirst = $first) {
                  <span class="inline-flex items-center gap-1 bg-[#06e9bb]/10 text-[#06e9bb] px-3 py-1.5 rounded-full text-xs border border-[#06e9bb]/20 hover:bg-[#06e9bb] hover:text-[#110d28] transition-all duration-200 cursor-pointer group/tag">
                    {{game}}
                    <svg class="w-3 h-3 opacity-0 group-hover/tag:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </span>
                }
              </div>
              
              <!-- Popularity Indicator -->
              <div class="mt-4 pt-4 border-t border-[#06e9bb]/10">
                <div class="flex items-center justify-between text-xs">
                  <div class="flex items-center gap-1">
                    <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <span class="text-gray-400">Popularity:</span>
                  </div>
                  <div class="flex items-center">
                    @for (star of [1,2,3,4,5]; track $index) {
                      <svg class="w-3 h-3" [class.text-[#06e9bb]]="$index < category.popularity || 4" [class.text-gray-600]="$index >= (category.popularity || 4)" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    }
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Hover Effect Border -->
            <div class="absolute inset-0 border-2 border-transparent group-hover:border-[#06e9bb]/30 rounded-xl transition-all duration-300 pointer-events-none"></div>
          </div>
        }
      </div>
      
      <!-- Stats Footer -->
      <div class="mt-10 p-6 bg-gradient-to-r from-[#110d28] to-[#1a1442] rounded-xl border border-[#06e9bb]/20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div class="text-2xl font-bold text-[#06e9bb] mb-2">{{getTotalGames()}}+</div>
            <div class="text-sm text-gray-300">Total Games Available</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-[#06e9bb] mb-2">95%</div>
            <div class="text-sm text-gray-300">Success Rate</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-[#06e9bb] mb-2">Instant</div>
            <div class="text-sm text-gray-300">Game Payouts</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class GameCategoriesComponent {
  @Input() gameCategories: any[] = [];

  getTotalGames(): number {
    return this.gameCategories.reduce((total, category) => total + (category.games?.length || 0), 0);
  }
}