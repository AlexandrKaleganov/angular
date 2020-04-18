import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: 'input[appDateInput]'
})
export class DateInputDirective {

  constructor() {
  }
  @HostBinding('class.set_border')  border = false;
  @HostBinding('class.set_border_two')  border2 = false;

  @HostListener('mouseenter')
  setBorder(){
    console.log('border1 включён');
    this.border = true;
}
  @HostListener('input',['event'])
  setBorderTwo(){
    console.log('border2 включен')
    this.border = false;
    this.border2=true;
  }
  @HostListener('mouseleave')
  setBorderFinal(){
    console.log('выключен');
    this.border = false;
    this.border2=false;
  }
}
