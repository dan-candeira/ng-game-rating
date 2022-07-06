import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[game-card]',
  templateUrl: './game-card.component.html',
  host: { class: 'game-card' },
})
export class GameCardComponent implements OnInit {
  @Input() title: string | null = null;
  @Input() image: string | null = null;
  @Input() gameId: string | null = null;
  @Input() rating: number | null = null;

  defaultImage = '/assets/default-image.jpg';

  constructor() {}

  ngOnInit(): void {}
}
