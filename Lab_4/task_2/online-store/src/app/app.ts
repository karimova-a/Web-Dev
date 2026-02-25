import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'online-store';
  categories: Category[];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) {
      return [];
    }
    return this.productService.getProductsByCategory(this.selectedCategoryId);
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }

  onDeleteProduct(productId: number) {
    // Remove from service
    this.productService.deleteProduct(productId);
    // Force re-evaluation of filteredProducts (the array reference changes)
    // Actually, since filteredProducts is a getter that calls service method,
    // it will automatically reflect the updated data.
    // No need to do anything else.
  }
}
