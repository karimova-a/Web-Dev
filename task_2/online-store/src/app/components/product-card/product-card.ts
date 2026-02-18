import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',      // changed from .component.html
  styleUrls: ['./product-card.css']        // changed from .component.css
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  currentImage: string = '';

  ngOnInit() {
    this.currentImage = this.product.image;
  }

  setImage(image: string) {
    this.currentImage = image;
  }

  shareWhatsApp(link: string, name: string) {
    const message = `Check out this product: ${name} - ${link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  }

  shareTelegram(link: string, name: string) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(name)}`;
    window.open(url, '_blank');
  }
}
