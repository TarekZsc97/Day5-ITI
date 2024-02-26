import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MyProduct } from '../models/my-product';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = [
    {
      id: 11,
      title:
        'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
      price: 109,
      CategoryID: 'electronics',
      isPurchased: false,
      quantity: 4,
      image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 12,
      title:
        'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
      price: 114,
      CategoryID: 'electronics',
      isPurchased: false,
      quantity: 4,
      image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 13,
      title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
      price: 599,
      CategoryID: 'electronics',
      isPurchased: false,
      quantity: 4,
      image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 14,
      title:
        'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA)  ',
      price: 999.99,
      CategoryID: 'electronics',
      isPurchased: false,
      quantity: 4,
      image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 16,
      title:
        "smart phones",
      price: 29.95,
      CategoryID: 'smart phones',
      isPurchased: false,
      quantity: 4,
      image: 'https://dummyimage.com/300x400/000/fff&text=Product+Image',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 17,
      title: 'smart phones ',
      price: 39.99,
      CategoryID: 'clothes',
      isPurchased: false,
      quantity: 4,
      image: 'https://dummyimage.com/300x400/000/fff&text=Product+Image',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 18,
      title: "smart phones ",
      price: 9.85,
      CategoryID: 'smart phones',
      isPurchased: false,
      quantity: 4,
      image: 'https://dummyimage.com/300x400/000/fff&text=Product+Image',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 19,
      title: "smart phones",
      price: 7.95,
      CategoryID: 'smart phones',
      isPurchased: false,
      quantity: 4,
      image: 'https://dummyimage.com/300x400/000/fff&text=Product+Image',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 20,
      title: 'smart phones',
      price: 12.99,
      CategoryID:'smart phones',
      isPurchased: false,
      quantity: 4,
      image: 'https://dummyimage.com/300x400/000/fff&text=Product+Image',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
  ];
  constructor(private _HttpClient: HttpClient) {}

  getAllProducts(): Iproduct[] {
    return this.products;
  }

  getproductDetails(id: number): Iproduct | undefined {
    return this.products.find((item) => item.id == id);
  }
  getproductByCategory(catid: string) {
    return this.products.filter((item) => item.CategoryID == catid);
  }

  // new//
  getCategories(): Observable<any> {
    return this._HttpClient.get(`http://localhost:3000/categories`);
  }

  addProduct(product: MyProduct): Observable<MyProduct> | undefined {
    return this._HttpClient.post<MyProduct>(
      `http://localhost:3000/products`,
      product
    );
  }
  getProducts(): Observable<MyProduct> | undefined {
    return this._HttpClient.get<MyProduct>(`http://localhost:3000/products`);
  }
  updateProduct(product: any): Observable<any> | undefined {
    return this._HttpClient.put<any>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }
  deleteProduct(id: number): Observable<MyProduct> {
    return this._HttpClient.delete<MyProduct>(
      `http://localhost:3000/products/${id}`
    );
  }
}


