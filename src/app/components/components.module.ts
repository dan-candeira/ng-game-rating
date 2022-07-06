import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card/game-card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GameCardComponent, CarouselComponent],
  imports: [CommonModule, RouterModule],
  exports: [GameCardComponent, CarouselComponent, CommonModule],
})
export class ComponentsModule {}
