// src/app/pages/disclaimer/disclaimer.component.ts
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-disclaimer',
  standalone: true,
  template: `
    <div class="min-h-screen gradient-bg py-12">
      <div class="container mx-auto px-4 max-w-4xl">
        <article class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20">
          <h1 class="text-4xl font-bold text-[#06e9bb] mb-6">Disclaimer</h1>
          
          <div class="prose prose-lg max-w-none">
            <section class="mb-8">
              <p class="text-gray-400 mb-6">
                Last updated: December 2024
              </p>

              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">General Disclaimer</h2>
              <p class="text-gray-300 mb-4">
                The information provided on 92 PAK Game is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>

              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">Gaming and Financial Disclaimer</h2>
              <p class="text-gray-300 mb-4">
                92 PAK Game involves real money gaming and financial transactions. Users should be aware that:
              </p>
              <ul class="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Gaming involves financial risk and may be addictive</li>
                <li>Users should only gamble with money they can afford to lose</li>
                <li>Past performance does not guarantee future results</li>
                <li>Users are responsible for complying with local gambling laws</li>
                <li>Minimum age requirement is 18 years</li>
              </ul>

              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">External Links Disclaimer</h2>
              <p class="text-gray-300 mb-4">
                The site may contain links to external websites that are not provided or maintained by or in any way affiliated with 92 PAK Game. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>

              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">Professional Disclaimer</h2>
              <p class="text-gray-300">
                The site cannot and does not contain financial advice. The gaming information is provided for general informational and educational purposes only and is not a substitute for professional advice.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  `
})
export class DisclaimerComponent implements OnInit {
    constructor(
        private seoService: SeoService,
        private configService: ConfigService
    ) {}
  
    ngOnInit(): void {
      this.seoService.setPageSeo('disclaimer');
    }
}