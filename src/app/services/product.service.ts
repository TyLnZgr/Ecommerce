import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'Lenovo',
      'Lenovo ThinkPad E15 Gen 3 AMD Ryzen 5 5500U 40GB 512GB Windows 10 Home 15.6 FHD Taşınabilir Bilgisayar',
      1600,
      1,
      [
        'assets/img/lenova.jfif',
        'assets/img/lenova2.jfif',
        'assets/img/lenova3.jfif',
      ]
    ),
    new Product(
      2,
      'Excalibur',
      'Casper Excalibur G900.1180-BF60X-B Intel Core i7 11800H 16GB 1 TB SSD RTX3060 Freedos 15.6 FHD Taşınabilir Bilgisayar',
      2100,
      1,
      [
        'assets/img/excalibur.jfif',
        'assets/img/lenova2.jfif',
        'assets/img/lenova3.jfif',
      ]
    ),
    new Product(
      3,
      'Monster',
      'Monster Abra A5 V16.7.3 Intel Core I5 11400H 16GB 500GB SSD GTX1650 Freedos 15.6 Fhd Taşınabilir Bilgisayar',
      1300,
      1,
      [
        'assets/img/monster.jfif',
        'assets/img/lenova2.jfif',
        'assets/img/lenova3.jfif',
      ]
    ),
    new Product(
      4,
      'Casper',
      'Casper Nirvana X500.1065-8V00X-G-F Intel Core i7 1065G7 8GB 500GB SSD Freedos 15.6 FHD Taşınabilir Bilgisayar',
      1300,
      1,
      [
        'assets/img/casper.jfif',
        'assets/img/lenova2.jfif',
        'assets/img/lenova3.jfif',
      ]
    ),
    new Product(
      5,
      'Asus',
      'Asus TUF F17 FX706HEB-HX129 Intel Core i7 11800H 16GB 1TB SSD RTX3050 Ti Freedos 17.3 FHD',
      1500,
      1,
      [
        'assets/img/asus.jfif',
        'assets/img/asus1.jfif',
        'assets/img/lenova3.jfif',
      ]
    ),
    new Product(
      6,
      'HP',
      'Hp 15S-FQ2027NT Intel Core i5 1135G7 8GB 512GB SSD 15.6 Fhd Taşınabilir Bilgisayar 2N2M8EA',
      800,
      1,
      ['assets/img/hp.jfif', 'assets/img/asus1.jfif', 'assets/img/lenova3.jfif']
    ),
    new Product(
      7,
      'Asus2',
      'Asus X509UA-BR325 Intel Core i3 7020U 4GB 256GB SSD Freedos 15.6 Taşınabilir Bilgisayar',
      500,
      1,
      [
        'assets/img/asus2.jfif',
        'assets/img/asus.jfif',
        'assets/img/lenova3.jfif',
      ]
    ),
    new Product(
      8,
      'Dell',
      'Dell Gaming G15 5511 Intel Core i7 11800H 16GB 512GB SSD Nvidia RTX3050 Ti 15.6 FHD',
      1930,
      1,
      [
        'assets/img/dell.jfif',
        'assets/img/asus.jfif',
        'assets/img/lenova3.jfif',
      ]
    ),
    new Product(
      9,
      'Lenova2',
      'Dell Gaming G15 5511 Intel Core i7 11800H 16GB 512GB SSD Nvidia RTX3050 Ti 15.6 FHD',
      1930,
      1,
      [
        'assets/img/lenova2.jfif',
        'assets/img/lenova3.jfif',
        'assets/img/lenova3.jfif',
      ]
    ),
    new Product(
      10,
      'Huawei',
      'Huawei Matebook D 16 AMD Ryzen 5 4600H 16GB 512GB SSD Windows 10 Home 16.1 FHD Taşınabilir Bilgisayar',
      1030,
      1,
      [
        'assets/img/huawei.jfif',
        'assets/img/lenova3.jfif',
        'assets/img/lenova3.jfif',
      ]
    ),
    new Product(
      11,
      'Asus 3',
      'Asus D409DA-BV158 AMD Ryzen 3 3200U 4GB 256GB SSD 14 Freedos Taşınabilir Bilgisayar',
      430,
      1,
      [
        'assets/img/asus3.jfif',
        'assets/img/lenova3.jfif',
        'assets/img/asus2.jfif',
      ]
    ),
    new Product(
      12,
      'Lenova 3',
      'Lenovo IdeaPad Intel Core i3 1005G1 4GB 256GB SSD Freedos 14 FHD Taşınabilir Bilgisayar ',
      530,
      1,
      [
        'assets/img/lenova3.jfif',
        'assets/img/lenova2.jfif',
        'assets/img/asus2.jfif',
      ]
    ),
    new Product(
      13,
      'Dell 2',
      'Dell Vostro 3500 Intel Core i7 1165G7 16GB 512GB SSD Ubuntu 15.6 Taşınabilir Bilgisayar ',
      1230,
      1,
      [
        'assets/img/dell2.jfif',
        'assets/img/lenova2.jfif',
        'assets/img/asus2.jfif',
      ]
    ),
    new Product(
      14,
      'Apple',
      'Apple MacBook Pro Intel Core i5 16GB 512GB SSD macOS 13 Taşınabilir Bilgisayar  Uzay Grisi ',
      3330,
      1,
      [
        'assets/img/apple.jfif',
        'assets/img/apple2.jfif',
        'assets/img/asus2.jfif',
      ]
    ),
    new Product(
      15,
      'Apple2',
      'Apple MacBook Air M1 Çip 8GB 256GB SSD macOS 13 QHD Taşınabilir Bilgisayar Gümüş',
      1330,
      1,
      [
        'assets/img/apple2.jfif',
        'assets/img/apple1.jfif',
        'assets/img/asus2.jfif',
      ]
    ),
  ];

  constructor() {}

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
