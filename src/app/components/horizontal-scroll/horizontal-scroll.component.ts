import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-horizontal-scroll',
  imports: [],
  templateUrl: './horizontal-scroll.component.html',
  styleUrl: './horizontal-scroll.component.css'
})
export class HorizontalScrollComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  onScroll() {
    const container = this.scrollContainer.nativeElement;
    const containerCenter = container.offsetWidth / 2 + container.scrollLeft;
    const elements = container.querySelectorAll('.item');

    elements.forEach((element: HTMLElement) => {
      const elementCenter = element.offsetLeft + element.offsetWidth / 2;
      const diff = Math.abs(containerCenter - elementCenter);

      if (diff < 465) {
        element.classList.remove('blur');
      } else {
        element.classList.add('blur');
      }
    });
  }


  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    this.onScroll();
    const container = this.scrollContainer.nativeElement;
    const maxScrollLeft = container.scrollWidth - container.clientWidth - 1;

    if (event.deltaY < 0){
      if (container.scrollLeft > 0) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      }
    } else {
      if (container.scrollLeft < maxScrollLeft) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      }
    }

  }
}
