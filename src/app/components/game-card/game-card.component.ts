import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[game-card]',
  templateUrl: './game-card.component.html',
  host: { class: 'game-card' },
})
export class GameCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
