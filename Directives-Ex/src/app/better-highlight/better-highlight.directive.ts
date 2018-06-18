import { Directive, ElementRef, OnInit, HostListener, Renderer2, HostBinding, Input } from '@angular/core';


@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.highlightColor;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
  //  this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
   this.backgroundColor = this.defaultColor;
  }

  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostListener('mouseenter') mouseover(eventData: Event){
  //  this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
   this.backgroundColor = this.highlightColor;  
}

  @HostListener('mouseleave') mouseleave(eventData: Event){
   // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
   this.backgroundColor = this.defaultColor;
  }

}
