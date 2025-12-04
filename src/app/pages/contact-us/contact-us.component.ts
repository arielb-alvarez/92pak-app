// src/app/pages/contact-us/contact-us.component.ts
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  template: `
    <div class="min-h-screen gradient-bg py-12">
      <div class="container mx-auto px-4 max-w-4xl">
        <article class="gradient-card p-8 rounded-xl shadow-lg border border-[#06e9bb]/20">
          <h1 class="text-4xl font-bold text-[#06e9bb] mb-6">Contact Us</h1>
          
          <div class="prose prose-lg max-w-none">
            <section class="mb-8">
              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">Get in Touch</h2>
              <p class="text-gray-300 mb-6">
                We're here to help! Reach out to us through any of the following methods:
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="bg-[#06e9bb]/10 p-6 rounded-lg border border-[#06e9bb]/20">
                  <h3 class="font-bold text-lg mb-3 text-[#06e9bb]">Customer Support</h3>
                  <p class="text-gray-300 mb-4">Available 24/7 via multiple channels</p>
                  <ul class="text-gray-400 space-y-3">
                    <li class="flex items-center">
                      <span class="mr-2">•</span>
                      <span class="text-gray-300">Live Chat:</span>
                      <span class="ml-1">In-app support</span>
                    </li>
                    
                    <li class="flex items-center hover:text-[#06e9bb] transition-colors">
                      <div class="flex items-center cursor-pointer group">
                        <a 
                          href="https://t.me/TeacherAaira_92Pak" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          class="flex items-center group-hover:text-[#06e9bb]"
                        >
                          <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.139l-1.537 7.377c-.121.555-.195.757-.943.757l-.35-.01-2.435-2.37-1.185 1.15c-.131.13-.24.24-.494.24s-.326-.08-.326-.28v-4.452l4.162-3.794-5.082.017-.027.012c-.243.012-.446.12-.446.418 0 .243.162.405.367.54l2.39 1.53-2.001 1.945-3.343-1.05c-.48-.15-.481-.48.12-.6l13.06-4.477c.404-.15.767.09.614.66z"/>
                          </svg>
                          <span>@TeacherAaira_92Pak</span>
                        </a>
                      </div>
                    </li>
                    
                    <li class="flex items-center hover:text-[#06e9bb] transition-colors">
                      <div class="flex items-center cursor-pointer group">
                        <a 
                          href="https://t.me/TeacherAaira92PAK_bot" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          class="flex items-center group-hover:text-[#06e9bb]"
                        >
                          <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.139l-1.537 7.377c-.121.555-.195.757-.943.757l-.35-.01-2.435-2.37-1.185 1.15c-.131.13-.24.24-.494.24s-.326-.08-.326-.28v-4.452l4.162-3.794-5.082.017-.027.012c-.243.012-.446.12-.446.418 0 .243.162.405.367.54l2.39 1.53-2.001 1.945-3.343-1.05c-.48-.15-.481-.48.12-.6l13.06-4.477c.404-.15.767.09.614.66z"/>
                          </svg>
                          <span>@TeacherAaira92PAK_bot</span>
                        </a>
                      </div>
                    </li>
                    
                    <li class="flex items-center">
                      <span class="mr-2">•</span>
                      <span class="text-gray-300">Phone:</span>
                      <span class="ml-1">Available upon request</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-[#06e9bb]/10 p-6 rounded-lg border border-[#06e9bb]/20">
                  <h3 class="font-bold text-lg mb-3 text-[#06e9bb]">Technical Support</h3>
                  <p class="text-gray-300 mb-4">For technical issues and app support</p>
                  <ul class="text-gray-400 space-y-3">
                    <li class="flex items-center">
                      <span class="mr-2">•</span>
                      <span class="text-gray-300">Email:</span>
                      <a 
                        href="mailto:support@92pakgame.com" 
                        class="ml-1 text-[#06e9bb] hover:underline"
                      >
                        support@92pakgame.com
                      </a>
                    </li>
                    <li class="flex items-center">
                      <span class="mr-2">•</span>
                      <span class="text-gray-300">Response Time:</span>
                      <span class="ml-1">Within 24 hours</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 class="text-2xl font-bold mb-4 text-[#06e9bb]">Common Issues</h2>
              <div class="space-y-4">
                <div class="border-l-4 border-[#06e9bb] pl-4">
                  <h3 class="font-semibold text-white">Account Issues</h3>
                  <p class="text-gray-300">Forgot password, login problems, account verification</p>
                </div>
                <div class="border-l-4 border-[#06e9bb] pl-4">
                  <h3 class="font-semibold text-white">Payment Issues</h3>
                  <p class="text-gray-300">Deposit/withdrawal problems, transaction failures</p>
                </div>
                <div class="border-l-4 border-[#06e9bb] pl-4">
                  <h3 class="font-semibold text-white">Game Issues</h3>
                  <p class="text-gray-300">Game not loading, technical glitches, fairness concerns</p>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  `
})
export class ContactUsComponent implements OnInit {
    constructor(
        private seoService: SeoService
    ) {}
  
    ngOnInit(): void {
      this.seoService.setPageSeo('contact');
    }
}