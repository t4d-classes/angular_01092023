import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAppend',
})
export class MyAppendPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    return String(value) + String(args[0]);
  }
}
