import { CreditCardPipe } from '../pipes/credit-card.pipe';
import { ProductCardDirective } from './product-card.directive';

describe('ProductCardDirective', () => {
  it('should create an instance', () => {
   const pipe = new CreditCardPipe();
   expect(pipe).toBeTruthy();
  });
});
