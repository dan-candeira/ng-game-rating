import {
  Component,
  AfterViewInit,
  ElementRef,
  Renderer2,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: '[carousel]',
  templateUrl: './carousel.component.html',
  host: { class: 'carousel' },
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  childrenArray: Array<HTMLElement> | null = null;
  buttonsArray: Array<HTMLElement> = [];

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.setupChildren();
  }

  setupChildren(): void {
    const children = this.element?.nativeElement?.children;
    this.childrenArray = Array.from(children) as Array<HTMLElement>;
    this.cd.detectChanges();

    this.childrenArray?.forEach((el: HTMLElement, index) => {
      const isDefaultImage = el?.getAttribute('data-carousel-default') == '';

      el?.setAttribute('data-carousel-id', String(index + 1));

      // Ideally i should check which item is on view to update the buttons
      // but for time constraints i will not do it
      if (isDefaultImage) {
        el.scrollIntoView({ inline: 'center' });
      }
    });

    const buttons = this.setupButtons() as HTMLElement;
    this.element.nativeElement?.parentNode.insertBefore(
      buttons,
      this.element.nativeElement?.nextSibling
    );
  }

  setupButtons(): HTMLElement {
    const container = this.renderer.createElement('div') as HTMLElement;
    container.classList.add('carousel__buttons');
    container.setAttribute('aria-hidden', String(true));

    this.childrenArray?.forEach((child, index) => {
      const button = this.renderer.createElement('button') as HTMLElement;
      const isCurrent = child.getAttribute('data-carousel-default') == '';

      if (isCurrent) {
        button.setAttribute('data-carousel-current', '');
      }

      button.setAttribute('title', `Ir para imagem ${index + 1}`);
      button.setAttribute('data-carousel-item', String(index + 1));
      button.tabIndex = -1;

      button.addEventListener('click', (e) => this.scrollToElement(e, child));

      container.appendChild(button);
      this.buttonsArray.push(button);
    });

    return container;
  }

  scrollToElement(e: any, child: HTMLElement): void {
    this.buttonsArray.forEach((button) =>
      button.removeAttribute('data-carousel-current')
    );

    child?.querySelector('a')?.focus();
    child?.scrollIntoView({ inline: 'center' });

    (e.target as HTMLElement).setAttribute('data-carousel-current', '');
  }

  ngOnDestroy(): void {
    this.buttonsArray.forEach((button) => {
      button.removeEventListener('click', () => {});
    });
  }
}
