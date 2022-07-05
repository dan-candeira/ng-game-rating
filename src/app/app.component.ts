import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subject, debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../scss/styles.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnDestroy {
  title = 'game-rating';
  search$: Subject<string> = new Subject<string>();
  subscription: Subscription;

  constructor() {
    this.subscription = this.search$
      .pipe(debounceTime(500))
      .subscribe((search) => {
        console.log(search);
      });
  }

  onSearch(): void {
    // make dispatch to search component
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
