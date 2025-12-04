// src/app/pages/about-us/about-us.component.ts
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  template: `
    <div class="min-h-screen gradient-bg py-12">
      <div class="container mx-auto px-4 max-w-4xl">
        <article class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20">
          <h1 class="text-4xl font-bold text-[#06e9bb] mb-6">About Us</h1>
          
          <div class="prose prose-lg max-w-none">
            <section class="mb-8">
              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">Our Mission</h2>
              <p class="text-gray-300 mb-6">
                92 PAK Game is dedicated to providing a secure and entertaining platform where Pakistani users can enjoy gaming while earning real rewards. We believe in creating opportunities for everyone to benefit from their gaming skills and time.
              </p>

              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">What We Offer</h2>
              <p class="text-gray-300 mb-4">
                Our platform features a diverse range of games including:
              </p>
              <ul class="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Lottery games with exciting jackpots</li>
                <li>Engaging slot machines with various themes</li>
                <li>Classic casino games with modern twists</li>
                <li>Sports betting on popular events</li>
              </ul>

              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">Our Commitment</h2>
              <p class="text-gray-300 mb-4">
                We are committed to:
              </p>
              <ul class="list-disc list-inside text-gray-300 space-y-2">
                <li>Providing fair and transparent gaming experiences</li>
                <li>Ensuring secure transactions and data protection</li>
                <li>Offering 24/7 customer support</li>
                <li>Supporting local payment methods</li>
                <li>Promoting responsible gaming practices</li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </div>
  `
})
export class AboutUsComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.seoService.setPageSeo('about');
  }
}