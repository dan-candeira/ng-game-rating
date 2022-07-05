import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card/game-card.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [GameCardComponent, CarouselComponent],
  imports: [CommonModule],
  exports: [GameCardComponent, CarouselComponent, CommonModule],
})
export class ComponentsModule {}
