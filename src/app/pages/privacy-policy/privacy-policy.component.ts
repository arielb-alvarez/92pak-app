// src/app/pages/privacy-policy/privacy-policy.component.ts
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  template: `
    <div class="min-h-screen gradient-bg py-12">
      <div class="container mx-auto px-4 max-w-4xl">
        <article class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20">
          <h1 class="text-4xl font-bold text-[#06e9bb] mb-6">Privacy Policy</h1>
          
          <div class="prose prose-lg max-w-none">
            <section class="mb-8">
              <p class="text-gray-400 mb-4">Last updated: December 2024</p>
              
              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">Information We Collect</h2>
              <p class="text-gray-300 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul class="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Account information and preferences</li>
                <li>Transaction and payment information</li>
                <li>Gameplay data and preferences</li>
              </ul>

              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">How We Use Your Information</h2>
              <p class="text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul class="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
              </ul>

              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">Data Security</h2>
              <p class="text-gray-300 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  `
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.seoService.setPageSeo('privacy');
  }
}