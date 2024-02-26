import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderComponent } from '../order/order.component';
import { ProductsService } from '../../../services/products.service';
import { MyProduct } from '../../../models/my-product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-product',
  standalone: true,
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css',
  imports: [OrderComponent, FormsModule, CommonModule],
})
export class NewProductComponent implements OnInit {
  categories: any[] = [];
  productsApi: MyProduct[] = [];
  updateMode: boolean = false;
  // products: IProduct[];
  constructor(
    private _Router: Router,
    private _ProductsService: ProductsService
  ) {
    // this.products = [
    //   {
    //     id: 1,
    //     title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    //     price: 109.95,
    //     quantity: 0,
    //     image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    //     CategoryID: 'Clothes',
    //     isPurchased: false,
    //     productInCart: 1,
    //     cardNumber: '123456789123456',
    //     purchaseDate: new Date(),
    //   },
    //   {
    //     id: 2,
    //     title: 'Mens Casual Premium Slim Fit T-Shirts ',
    //     price: 22.3,
    //     quantity: 1,
    //     image:
    //       'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    //     CategoryID: 'Clothes',
    //     isPurchased: false,
    //     productInCart: 1,
    //     cardNumber: '123456789123456',
    //     purchaseDate: new Date(),
    //   },
    //   {
    //     id: 3,
    //     title: 'Mens Cotton Jacket',
    //     price: 55.99,
    //     quantity: 2,
    //     image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    //     CategoryID: 'Clothes',
    //     isPurchased: false,
    //     productInCart: 1,
    //     cardNumber: '123456789123456',
    //     purchaseDate: new Date(),
    //   },
    //   {
    //     id: 4,
    //     title: 'Mens Casual Slim Fit',
    //     price: 15.99,
    //     quantity: 3,
    //     image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    //     CategoryID: 'Clothes',
    //     isPurchased: false,
    //     productInCart: 1,
    //     cardNumber: '123456789123456',
    //     purchaseDate: new Date(),
    //   },
    //   {
    //     id: 5,
    //     title:
    //       "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    //     price: 695,
    //     quantity: 4,
    //     image:
    //       'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    //     CategoryID: 'Jewlary',
    //     isPurchased: false,
    //     productInCart: 1,
    //     cardNumber: '123456789123456',
    //     purchaseDate: new Date(),
    //   },
    //   {
    //     id: 6,
    //     title: 'Solid Gold Petite Micropave ',
    //     price: 168,
    //     quantity: 5,
    //     image:
    //       'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    //     CategoryID: 'Jewlary',
    //     isPurchased: false,
    //     productInCart: 1,
    //     cardNumber: '123456789123456',
    //     purchaseDate: new Date(),
    //   },
    //   {
    //     id: 7,
    //     title: 'White Gold Plated Princess',
    //     price: 9.99,
    //     quantity: 6,
    //     image:
    //       'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    //     CategoryID: 'Jewlary',
    //     isPurchased: false,
    //     productInCart: 1,
    //     cardNumber: '123456789123456',
    //     purchaseDate: new Date(),
    //   },
    //   {
    //     id: 8,
    //     title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    //     price: 10.99,
    //     quantity: 8,
    //     image:
    //       'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    //     CategoryID: 'Jewlary',
    //     isPurchased: false,
    //     productInCart: 1,
    //     cardNumber: '123456789123456',
    //     purchaseDate: new Date(),
    //   },
    //   {
    //     id: 9,
    //     title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
    //     price: 64,
    //     quantity: 2,
    //     image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    //     CategoryID: 'Electronics',
    //     isPurchased: false,
    //     productInCart: 1,
    //     cardNumber: '123456789123456',
    //     purchaseDate: new Date(),
    //   },
    //   {
    //     id: 10,
    //     title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    //     price: 109,
    //     quantity: 2,
    //     image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    //     CategoryID: 'Electronics',
    //     isPurchased: false,
    //     productInCart: 1,
    //     cardNumber: '123456789123456',
    //     purchaseDate: new Date(),
    //   },
    // ];
  }
  ngOnInit(): void {
    this.getAllCategories();
    this.getProducts();
  }
  //  addNewProduct: IProduct = {
  //     id: 456789,
  //     title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  //     price: 109,
  //     quantity: 50,
  //     image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  //     CategoryID: 'Clothes',
  //     isPurchased: false,
  //     productInCart: 1,
  //     cardNumber: '123456789123456',
  //     purchaseDate: new Date(),
  //   };

  // addProduct(product: IProduct) {

  //   this.products.push(product);
  //   this._Router.navigate(['/admin/order'] , { queryParams: { addProduct: JSON.stringify(product) } });
  // }
  getAllCategories() {
    this._ProductsService.getCategories().subscribe({
      next: (data: any[]) => {
        this.categories = data;
      },
    });
  }
  product: MyProduct = {} as MyProduct;
  addProduct() {
    this._ProductsService.addProduct(this.product)?.subscribe({
      next: (product) => {
        this.getProducts();
        this.clearForm();
        // this._Router.navigate(['/admin/order']);
      },
    });
  }
  getProducts() {
    this._ProductsService.getProducts()?.subscribe({
      next: (data: any) => {
        this.productsApi = data;
      },
    });
  }
  updateProductBtn(id: number) {
    let updatedProduct = this.productsApi.filter((itemId) => itemId.id === id);
    this.updateMode = true;
    this.product.id = updatedProduct[0].id;
    this.product.productName = updatedProduct[0].productName;
    this.product.Price = updatedProduct[0].Price;
    this.product.Quantity = updatedProduct[0].Quantity;
    this.product.Category = updatedProduct[0].Category;
  }

  updateProduct() {

    this._ProductsService.updateProduct(this.product)?.subscribe({
      next: () => {
        this.updateMode = false;
        this.getProducts();
        this.clearForm();
      },
    });
  }
  deleteProduct(id: number) {
    this._ProductsService.deleteProduct(id).subscribe({
      next: () => {
        this.getProducts();
      },
    });
  }
  clearForm() {
    this.product.Category = '';
    this.product.Price = 0;
    this.product.Quantity = 0;
    this.product.productName = '';
  }
}
