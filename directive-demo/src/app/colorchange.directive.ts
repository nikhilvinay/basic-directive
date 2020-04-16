import { Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appColorchange]'
})
export class ColorchangeDirective {

  constructor(renderer: Renderer2, elmRef: ElementRef) {
    renderer.setStyle(elmRef.nativeElement, 'color', 'red');
  }

}
