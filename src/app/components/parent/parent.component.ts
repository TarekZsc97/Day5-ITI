import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { CommonModule } from '@angular/common';
import { Iproduct } from '../../models/iproduct';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule, ProductsComponent, CommonModule, RouterModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  filteredProducts: string = 'all';
  cart: Iproduct[] = [];

  getItems(product: Iproduct) {
    let isExist = this.cart.find((item) => item.id === product.id);

    if (isExist) {
      isExist.productInCart += 1;
    } else {
      product.productInCart = 1;
      this.cart.push(product);
    }
  }

  totalPrice() {
    return this.cart.reduce(
      (total, item) => total + item.price * item.productInCart,
      0
    );
  }
}
