import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';  // path fixed
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',      // changed from .component.html
  styleUrls: ['./product-list.css']        // changed from .component.css
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 128GB',
      description: 'Новый iPhone 15 с улучшенной камерой и процессором A16. Отличный выбор для повседневного использования.',
      price: 350000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3e/hf4/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h24/84378448265246.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-113137788/?c=750000000'
    },
    {
      id: 2,
      name: 'Ноутбук Apple MacBook Air 13 M1 256GB',
      description: 'Легкий и мощный ноутбук с чипом M1. Идеален для работы и учебы.',
      price: 320000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h09/63897826836510.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h09/63897826836510.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3b/h6f/63897826869278.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/hc1/63897826902046.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m1-256gb-100797845/?c=750000000'
    },
    {
      id: 3,
      name: 'Наушники Sony WH-1000XM4',
      description: 'Беспроводные наушники с шумоподавлением. Высокое качество звука и комфорт.',
      price: 120000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h0f/64387624124446.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc5/h0f/64387624124446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h87/h9f/64387624157214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h33/64387624189982.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm4-100542405/?c=750000000'
    },
    {
      id: 4,
      name: 'Планшет Samsung Galaxy Tab S9 FE 10.9" 128GB',
      description: 'Отличный планшет для мультимедиа и работы. Стилус в комплекте.',
      price: 150000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/h0b/84927103057950.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h08/h0b/84927103057950.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h73/hc7/84927103090718.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h61/hc2/84927103123486.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-fe-10-9-128gb-113730363/?c=750000000'
    },
    {
      id: 5,
      name: 'Фитнес-браслет Xiaomi Mi Band 8',
      description: 'Стильный и функциональный браслет с большим экраном и длительным временем работы.',
      price: 25000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc7/hd7/82846302994462.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hd7/82846302994462.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h11/hf6/82846303027230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1c/h2d/82846303059998.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-mi-band-8-105398597/?c=750000000'
    }
  ];
}
