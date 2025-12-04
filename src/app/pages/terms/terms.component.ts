// src/app/pages/terms/terms.component.ts
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-terms',
  standalone: true,
  template: `
    <div class="min-h-screen gradient-bg py-12">
      <div class="container mx-auto px-4 max-w-4xl">
        <article class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20">
          <h1 class="text-4xl font-bold text-[#06e9bb] mb-6">Terms and Conditions</h1>
          
          <div class="prose prose-lg max-w-none">
            <section class="mb-8">
              <p class="text-gray-400 mb-6">
                Last updated: December 2024
              </p>

              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">Acceptance of Terms</h2>
              <p class="text-gray-300 mb-6">
                By accessing and using 92 PAK Game, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">User Responsibilities</h2>
              <ul class="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>You must be at least 18 years old to use our services</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You agree to provide accurate and complete registration information</li>
                <li>You must comply with all applicable laws and regulations</li>
              </ul>

              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">Prohibited Activities</h2>
              <p class="text-gray-300 mb-4">
                Users are prohibited from:
              </p>
              <ul class="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Using automated systems or software to extract data</li>
                <li>Attempting to interfere with the proper functioning of the service</li>
                <li>Engaging in any fraudulent or illegal activities</li>
                <li>Creating multiple accounts for abusive purposes</li>
                <li>Sharing accounts with other users</li>
              </ul>

              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">Payment Terms</h2>
              <p class="text-gray-300 mb-4">
                All transactions are final and non-refundable. We reserve the right to modify pricing and payment terms at any time.
              </p>

              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">Termination</h2>
              <p class="text-gray-300 mb-4">
                We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users.
              </p>

              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">Changes to Terms</h2>
              <p class="text-gray-300">
                We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms on this page.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  `
})
export class TermsComponent implements OnInit {
    constructor(
        private seoService: SeoService,
        private configService: ConfigService
    ) {}
    
    ngOnInit(): void {
        this.seoService.setPageSeo('terms');
    }
}