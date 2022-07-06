import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  featured: Array<any> | null = null;

  games$ = this.gameService.getGames().pipe(
    tap((games: Array<any>) => {
      const featured: Array<any> = [];

      games.forEach((game) => {
        if (game?.highlight) {
          featured.push(game);
        }
      });
      this.featured = featured;
    })
  );
  constructor(private gameService: GameService) {}
}
