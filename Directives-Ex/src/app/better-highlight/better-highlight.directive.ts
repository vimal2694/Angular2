import { Directive, ElementRef, OnInit, HostListener, Renderer2, HostBinding } from '@angular/core';


@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
  //  this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  @HostListener('mouseenter') mouseover(eventData: Event){
  //  this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
   this.backgroundColor = 'blue';  
}

  @HostListener('mouseleave') mouseleave(eventData: Event){
   // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
   this.backgroundColor = 'transparent'
  }

}
