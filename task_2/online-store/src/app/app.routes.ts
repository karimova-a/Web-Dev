import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { AboutComponent } from './components/about/about';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'about', component: AboutComponent }
];
