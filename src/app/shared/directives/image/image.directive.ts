import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective implements AfterViewInit, OnChanges {

  @Input() imgSrc?: string;

  defaultImg = 'https://placehold.co/300x300?text=Product+image';

  constructor(
    private el: ElementRef,
    ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleMedia();
  }

  ngAfterViewInit(): void {
    this.handleMedia();
  }

  handleMedia(): void {
    const img = this.imgSrc || this.defaultImg;
    this.el.nativeElement.src = img;
  }

}
