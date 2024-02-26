import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ParentComponent } from './components/parent/parent.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { NewProductComponent } from './components/admin/new-product/new-product.component';
import { OrderComponent } from './components/admin/order/order.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'products', component: ParentComponent },
  { path: 'productDetails/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movieDetails/:id', component: MovieDetailsComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'newProduct', component: NewProductComponent },
      { path: 'order', component: OrderComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
