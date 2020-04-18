import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appLod]'
})
export class LodDirective {

  constructor() { }
  @HostBinding('class.max') isMove = false;
  @HostListener('mouseenter')
  onMouseEnter() {
    this.isMove = true;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.isMove = false;
  }
}
