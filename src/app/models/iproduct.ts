export interface Iproduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  CategoryID: string;
  isPurchased: boolean;
  productInCart: number;
  purchaseDate: Date;
  cardNumber: string;
}
