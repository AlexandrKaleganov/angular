import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myTitleCase'
})
export class MyTitleCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(value);
    return value ? value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() : '';
  }
}
