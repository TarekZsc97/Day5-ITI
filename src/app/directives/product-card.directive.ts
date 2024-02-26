import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
  standalone: true,
})
export class ProductCardDirective {
  constructor(private _elementRef: ElementRef) {
    this._elementRef.nativeElement.style.borderRadius = '10px';
    this._elementRef.nativeElement.style.boxShadow =
      '0 8px 12px rgba(0, 0, 0, 0.5)';
  }
  @HostListener('mouseenter') onMouseIn() {
    this._elementRef.nativeElement.style.boxShadow =
      '0 8px 12px rgba(0, 0, 0, 1)';
  }
  @HostListener('mouseleave') onMouseOut() {
    this._elementRef.nativeElement.style.boxShadow =
      '0 8px 12px rgba(0, 0, 0, 0.5)';
  }
}
