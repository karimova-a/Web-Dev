import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Define 4 categories
  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  // Define 20 products (5 per category) with real kaspi.kz links
  products: Product[] = [
    // Category 1: Smartphones
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 128GB',
      description: 'Новый iPhone 15 с улучшенной камерой и процессором A16.',
      price: 350000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3e/hf4/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h24/84378448265246.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-113137788/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Смартфон Samsung Galaxy S23 Ultra',
      description: 'Флагманский смартфон с мощной камерой и S Pen.',
      price: 400000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/hb7/69665693384734.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd1/hb7/69665693384734.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9b/h5d/69665693417502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/hc2/69665693450270.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-5g-256gb-109545583/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Смартфон Xiaomi 13T Pro',
      description: 'Производительный смартфон с камерой Leica.',
      price: 220000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h18/84922208419870.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6f/h18/84922208419870.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdb/hc1/84922208452638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h82/h42/84922208485406.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-13t-pro-12-512gb-chernyi-114218682/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Смартфон Google Pixel 8 Pro',
      description: 'Чистый Android, отличная камера и ИИ-функции.',
      price: 380000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/h79/84903368015902.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h08/h79/84903368015902.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h29/84903368048670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/hfe/84903368081438.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-128gb-chernyi-113678151/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'Смартфон OnePlus 11',
      description: 'Быстрый и плавный с OxygenOS и мощным железом.',
      price: 280000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h68/h21/67482562740254.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h68/h21/67482562740254.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/hf5/67482562773022.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/h4d/67482562805790.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/oneplus-11-256gb-zelenyi-107996631/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    // Category 2: Laptops
    {
      id: 6,
      name: 'Ноутбук Apple MacBook Air 13 M1 256GB',
      description: 'Легкий и мощный ноутбук с чипом M1.',
      price: 320000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h09/63897826836510.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h09/63897826836510.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3b/h6f/63897826869278.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/hc1/63897826902046.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m1-256gb-100797845/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'Ноутбук ASUS ROG Zephyrus G14',
      description: 'Игровой ноутбук с мощной видеокартой и компактным корпусом.',
      price: 550000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/hf4/64514177892382.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h42/hf4/64514177892382.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h42/hf4/64514177925150.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h42/hf4/64514177957918.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-ga402rj-108798096/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'Ноутбук Lenovo ThinkPad X1 Carbon',
      description: 'Премиальный ультрабук для бизнеса.',
      price: 600000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h5d/64356202250270.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h5d/64356202250270.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h5d/64356202283038.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h5d/64356202315806.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-gen-10-21cb00c6rt-106604995/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'Ноутбук Dell XPS 13',
      description: 'Тонкий и легкий ноутбук с безрамочным экраном.',
      price: 500000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h86/64217409388574.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb8/h86/64217409388574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb8/h86/64217409421342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb8/h86/64217409454110.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dell-xps-13-9310-105210089/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'Ноутбук HP Spectre x360',
      description: 'Трансформер с сенсорным экраном и стилусом.',
      price: 480000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/h51/64456539521054.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5c/h51/64456539521054.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5c/h51/64456539553822.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5c/h51/64456539586590.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-ea0023ci-105386482/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    // Category 3: Headphones
    {
      id: 11,
      name: 'Наушники Sony WH-1000XM4',
      description: 'Беспроводные наушники с шумоподавлением.',
      price: 120000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h0f/64387624124446.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc5/h0f/64387624124446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h87/h9f/64387624157214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h33/64387624189982.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm4-100542405/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Наушники Apple AirPods Pro 2',
      description: 'Полностью беспроводные наушники с активным шумоподавлением.',
      price: 90000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf6/h65/67744219873310.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf6/h65/67744219873310.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf6/h65/67744219906078.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf6/h65/67744219938846.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-106362913/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'Наушники JBL Tune 760NC',
      description: 'Беспроводные наушники с шумоподавлением и мощным басом.',
      price: 35000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/h0b/64366822309918.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/h0b/64366822309918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/h0b/64366822342686.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/h0b/64366822375454.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/jbl-tune-760nc-102152173/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Наушники Marshall Major IV',
      description: 'Стильные наушники с винтажным дизайном и мощным звуком.',
      price: 45000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/h3d/63803647033374.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0b/h3d/63803647033374.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0b/h3d/63803647066142.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0b/h3d/63803647098910.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/marshall-major-iv-101545023/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'Наушники Sennheiser HD 450BT',
      description: 'Качественные беспроводные наушники с шумоподавлением.',
      price: 55000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h61/h05/64331854184478.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h61/h05/64331854184478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h61/h05/64331854217246.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h61/h05/64331854250014.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sennheiser-hd-450bt-102162425/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    // Category 4: Tablets
    {
      id: 16,
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
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-fe-10-9-128gb-113730363/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Планшет Apple iPad Pro 11" 2022',
      description: 'Мощный планшет с чипом M2 и дисплеем ProMotion.',
      price: 500000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/hc5/64721560338462.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/hc5/64721560338462.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/hc5/64721560371230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/hc5/64721560403998.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2022-128gb-107416593/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Планшет Xiaomi Pad 6',
      description: 'Стильный планшет с высоким разрешением и мощным процессором.',
      price: 130000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/hd2/84883175637022.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h26/hd2/84883175637022.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h26/hd2/84883175669790.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h26/hd2/84883175702558.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-128gb-113472294/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Планшет Lenovo Tab P12',
      description: 'Большой экран, отличный для учебы и развлечений.',
      price: 140000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/h93/68632330338334.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hbe/h93/68632330338334.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbe/h93/68632330371102.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbe/h93/68632330403870.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-tab-p12-128gb-109940711/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Планшет Huawei MatePad 11',
      description: 'Сбалансированный планшет с отличным экраном и звуком.',
      price: 160000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/hd0/64343671177246.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4c/hd0/64343671177246.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4c/hd0/64343671210014.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4c/hd0/64343671242782.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-128gb-105033275/?c=750000000',
      likes: 0,
      categoryId: 4
    }
  ];

  constructor() { }

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  // For deleting a product from the master list
  deleteProduct(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
