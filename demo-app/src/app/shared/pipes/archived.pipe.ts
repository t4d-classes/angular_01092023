import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'archived',
})
export class ArchivedPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    return value ? 'Archived' : 'Active';
  }
}
