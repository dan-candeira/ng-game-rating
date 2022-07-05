import {
  Component,
  AfterViewInit,
  QueryList,
  ContentChildren,
} from '@angular/core';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
})
export class MainBannerComponent implements AfterViewInit {
  @ContentChildren('content') element?: any;
  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.element);
  }
}
