import {Directive, ElementRef , HostListener , Input} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
@Input() appChangeColor =0;
@Input() Number =0;
@Input() Equal =0;

  constructor(private element: ElementRef)  {
   // console.log((element.nativeElement)
   //  element.nativeElement.style.backgroundColor='red';
    console.log(this.appChangeColor);
  }
  // @HostListener('mouseenter' , ['$event']) onMouseEnter(){
  //  this.element.nativeElement.style.backgroundColor='blue';
  // }
  @HostListener('click' , ['$event']) onClick(){
    console.log(this.appChangeColor);
    console.log(this.Number+this.Equal);

     this.element.nativeElement.style.backgroundColor='blue';
    }
}








