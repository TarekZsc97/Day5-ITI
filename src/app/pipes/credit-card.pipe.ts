import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
  standalone: true,
})
export class CreditCardPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/(.{4})/g, '$1-');
  }
}
