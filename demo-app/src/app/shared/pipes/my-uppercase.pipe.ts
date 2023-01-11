import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase',
})
export class MyUppercasePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    return String(value).toUpperCase();
  }
}
