// src/app/pages/home/components/content-section/faq.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="faq" class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20" *ngIf="faqs.length > 0">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-[#06e9bb] mb-4">Frequently Asked Questions (FAQ)</h2>
        <p class="text-gray-300 max-w-3xl mx-auto">Find answers to common questions about {{appInfo?.name || '92 PAK Game'}}. Click on any question to expand the answer.</p>
      </div>
      
      <div class="space-y-4 max-w-4xl mx-auto">
        @for (faq of faqs; track faq.question; let i = $index) {
          <div class="group" [class.active]="expandedIndex === i">
            <!-- FAQ Item -->
            <button 
              class="w-full text-left p-6 rounded-xl border border-[#06e9bb]/20 bg-gradient-to-r from-[#1a1442] to-[#110d28] hover:border-[#06e9bb]/40 hover:bg-gradient-to-r hover:from-[#06e9bb]/5 hover:to-[#06e9bb]/2 transition-all duration-300"
              (click)="toggleFAQ(i)"
              [attr.aria-expanded]="expandedIndex === i"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-start gap-4">
                  <!-- Question Number -->
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#06e9bb]/20 to-[#06e9bb]/10 border border-[#06e9bb]/30 flex items-center justify-center text-[#06e9bb] font-bold">
                    {{i + 1}}
                  </div>
                  
                  <!-- Question -->
                  <div>
                    <h3 class="font-semibold text-lg text-white mb-2 group-[.active]:text-[#06e9bb] transition-colors">{{faq.question}}</h3>
                    <div class="flex items-center gap-2 text-sm">
                      <span class="text-[#06e9bb] font-medium">{{faq.category || 'General'}}</span>
                      <span class="text-gray-500">•</span>
                      <span class="text-gray-400">{{faq.readTime || '1 min read'}}</span>
                    </div>
                  </div>
                </div>
                
                <!-- Expand/Collapse Icon -->
                <div class="flex-shrink-0 ml-4">
                  <svg class="w-6 h-6 text-[#06e9bb] transition-transform duration-300" 
                       [class.rotate-180]="expandedIndex === i" 
                       fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </div>
              </div>
              
              <!-- Answer (Collapsible) -->
              <div class="overflow-hidden transition-all duration-300" 
                   [class.max-h-0]="expandedIndex !== i"
                   [class.max-h-96]="expandedIndex === i"
                   [class.mt-4]="expandedIndex === i">
                <div class="pl-14 pt-4 border-t border-[#06e9bb]/10 mt-4">
                  <p class="text-gray-300 mb-4">{{faq.answer}}</p>
                  
                  <!-- Additional Info if available -->
                  @if (faq.additionalInfo) {
                    <div class="mt-4 p-4 bg-[#110d28] rounded-lg border border-[#06e9bb]/10">
                      <div class="flex items-start gap-3">
                        <svg class="w-5 h-5 text-[#06e9bb] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                        </svg>
                        <p class="text-sm text-[#06e9bb]">{{faq.additionalInfo}}</p>
                      </div>
                    </div>
                  }
                  
                  <!-- Related Links -->
                  @if (faq.relatedLinks && faq.relatedLinks.length > 0) {
                    <div class="mt-4">
                      <p class="text-sm text-gray-400 mb-2">Related:</p>
                      <div class="flex flex-wrap gap-2">
                        @for (link of faq.relatedLinks; track link) {
                          <span class="text-xs px-3 py-1 bg-[#06e9bb]/10 text-[#06e9bb] rounded-full border border-[#06e9bb]/20">
                            {{link}}
                          </span>
                        }
                      </div>
                    </div>
                  }
                </div>
              </div>
            </button>
          </div>
        }
      </div>
      
      <!-- FAQ Stats -->
      <div class="mt-12 p-6 bg-gradient-to-r from-[#110d28] to-[#1a1442] rounded-xl border border-[#06e9bb]/20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div class="text-2xl font-bold text-[#06e9bb] mb-2">{{faqs.length}}+</div>
            <div class="text-sm text-gray-300">Answered Questions</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-[#06e9bb] mb-2">24/7</div>
            <div class="text-sm text-gray-300">Support Available</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-[#06e9bb] mb-2">100%</div>
            <div class="text-sm text-gray-300">Satisfaction Rate</div>
          </div>
        </div>
      </div>
      
      <!-- Still Have Questions -->
      <div class="mt-10 text-center">
        <div class="inline-block p-6 bg-gradient-to-r from-[#06e9bb]/10 to-[#06e9bb]/5 rounded-xl border border-[#06e9bb]/20">
          <h4 class="font-bold text-lg mb-3 text-[#06e9bb]">Still have questions?</h4>
          <p class="text-gray-300 mb-4 max-w-md mx-auto">Can't find the answer you're looking for? Please reach out to our friendly support team.</p>
          <button class="btn-secondary px-6 py-3 text-sm">
            <span class="flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
              </svg>
              Contact Support
            </span>
          </button>
        </div>
      </div>
    </section>
  `
})
export class FAQComponent {
  @Input() faqs: any[] = [];
  @Input() appInfo: any = {};
  
  expandedIndex: number = 0; // First FAQ expanded by default

  toggleFAQ(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? -1 : index;
  }
}