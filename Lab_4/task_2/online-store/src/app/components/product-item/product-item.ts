import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  // Local likes counter (initialized from product.likes)
  likes: number = this.product?.likes || 0;

  // Share methods (unchanged from Lab 4)
  shareWhatsApp(link: string, name: string) {
    const message = `Check out this product: ${name} - ${link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  }

  shareTelegram(link: string, name: string) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(name)}`;
    window.open(url, '_blank');
  }

  // Like method
  likeProduct() {
    this.likes++;
  }

  // Delete method
  deleteProduct() {
    this.delete.emit(this.product.id);
  }
}
