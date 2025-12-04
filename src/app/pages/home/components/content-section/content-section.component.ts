// src/app/pages/home/components/content-section/content-section.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction.component';
import { WhatIs92PakGameComponent } from './what-is-92pak-game.component';
import { PremiumFeaturesComponent } from './premium-features.component';
import { HowToRegisterComponent } from './how-to-register.component';
import { GameCategoriesComponent } from './game-categories.component';
import { AdvancedEarningStrategiesComponent } from './advanced-earning-strategies.component';
import { ExpertTipsComponent } from './expert-tips.component';
import { ProsConsComponent } from './pros-cons.component';
import { UserReviewsComponent } from './user-reviews.component';
import { FAQComponent } from './faq.component';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [
    CommonModule,
    IntroductionComponent,
    WhatIs92PakGameComponent,
    PremiumFeaturesComponent,
    HowToRegisterComponent,
    GameCategoriesComponent,
    AdvancedEarningStrategiesComponent,
    ExpertTipsComponent,
    ProsConsComponent,
    UserReviewsComponent,
    FAQComponent
  ],
  template: `
    <div class="w-full space-y-6 md:space-y-8"> <!-- Removed grid constraints -->
      <!-- Introduction -->
      <app-introduction 
        [appInfo]="appInfo"
        (imageError)="imageError.emit($event)">
      </app-introduction>

      <!-- What is 92 PAK Game -->
      <app-what-is-92pak-game 
        [appInfo]="appInfo"
        (imageError)="imageError.emit($event)">
      </app-what-is-92pak-game>

      <!-- Premium Features -->
      <app-premium-features 
        [appInfo]="appInfo"
        [features]="sectionsData?.features || []"
        (register)="register.emit()">
      </app-premium-features>

      <!-- How to Register -->
      <app-how-to-register 
        [appInfo]="appInfo"
        [registrationSteps]="sectionsData?.registrationSteps || []"
        (register)="register.emit()"
        (scrollToSection)="scrollToSection.emit($event)">
      </app-how-to-register>

      <!-- Game Categories -->
      <app-game-categories 
        [gameCategories]="sectionsData?.gameCategories || []">
      </app-game-categories>

      <!-- Advanced Earning Strategies -->
      <app-advanced-earning-strategies 
        [appInfo]="appInfo"
        [earningStrategies]="sectionsData?.earningStrategies || []"
        (register)="register.emit()"
        (scrollToSection)="scrollToSection.emit($event)">
      </app-advanced-earning-strategies>

      <!-- Expert Tips -->
      <app-expert-tips 
        [appInfo]="appInfo"
        [proTips]="sectionsData?.proTips || []">
      </app-expert-tips>

      <!-- Pros and Cons -->
      <app-pros-cons 
        [pros]="sectionsData?.pros || []"
        [cons]="sectionsData?.cons || []">
      </app-pros-cons>

      <!-- User Reviews -->
      <app-user-reviews 
        [reviews]="sectionsData?.reviews || {}"
        [appInfo]="appInfo">
      </app-user-reviews>

      <!-- FAQ Section -->
      <app-faq 
        [faqs]="sectionsData?.faqs || []">
      </app-faq>
    </div>
  `
})
export class ContentSectionComponent {
  @Input() appInfo: any = {};
  @Input() sectionsData: any = {};
  @Output() register = new EventEmitter<void>();
  @Output() scrollToSection = new EventEmitter<string>();
  @Output() imageError = new EventEmitter<Event>();
}