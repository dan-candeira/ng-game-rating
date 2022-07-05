import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card/game-card.component';
import { MainBannerComponent } from './main-banner/main-banner.component';

@NgModule({
  declarations: [GameCardComponent, MainBannerComponent],
  imports: [CommonModule],
  exports: [GameCardComponent, MainBannerComponent, CommonModule],
})
export class ComponentsModule {}
