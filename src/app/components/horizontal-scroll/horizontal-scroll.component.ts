import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-horizontal-scroll',
  imports: [],
  templateUrl: './horizontal-scroll.component.html',
  styleUrl: './horizontal-scroll.component.css'
})
export class HorizontalScrollComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent): void {
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
