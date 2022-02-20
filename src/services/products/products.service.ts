import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto } from 'src/DTOs/products.dto';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'producto 1',
      description: 'hola descripcion',
      price: 200,
      stock: 30,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: CreateProductDto) {
    const newProduct = {
      id: this.counterId++,
      ...payload,
    };

    this.products.push(newProduct);
    return this.products;
  }
}
