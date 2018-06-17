import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
  }
}
