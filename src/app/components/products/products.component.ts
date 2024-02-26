import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';
import { ProductCardDirective } from '../../directives/product-card.directive';
import { CreditCardPipe } from '../../pipes/credit-card.pipe';
import { ProductsService } from '../../services/products.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ProductCardDirective,
    CreditCardPipe,
    RouterModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) {}
  clientName: string = 'Naglaa Fawzy';
  products!: Iproduct[];
  filteredProduct: Iproduct[] = [];

  togglePurchase(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (product) {
      product.isPurchased = !product.isPurchased;
      product.quantity -= 1;
    }
  }

  getAllProducts() {
    this.products = this._ProductsService.getAllProducts();
  }
  ngOnInit(): void {
    this.getAllProducts();
    this.filteredProduct = this.products;
  }

  @Output() addChildEvent: EventEmitter<Iproduct> =
    new EventEmitter<Iproduct>();
  
  
  @Input() set filteredProducts(value: string) {
    this.filteredProduct = this.filterSelectedProduct(value);
  }
  filterSelectedProduct(value: string) {
    if (value === 'all') {
      return this.products;
    } else {
      return this.products.filter(
        (product: Iproduct) => product.CategoryID === value
      );
    }
  }

  addToCart(product: Iproduct) {
    this.addChildEvent.emit(product);
  }
}
