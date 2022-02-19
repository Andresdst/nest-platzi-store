import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Delete,
  HttpStatus,
  HttpCode,
  NotFoundException,
} from '@nestjs/common';

import { ProductsService } from 'src/services/products/products.service';

@Controller('products') //estructura por defecto
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('filter') //las rutas fijas van de primero, las dinamicas al final
  getProductFilter() {
    return {
      message: `yo soy una ruta`,
    };
  }

  @Get(':productId')
  getOne(@Param('productId') productId: number) {
    // return {
    //   message: 'este es un producto',
    //   productId,
    // };
    const product = this.productsService.findOne(productId);
    if (!product) {
      throw new NotFoundException('there is no product');
    }
    return product;
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0, //desde donde comienza.
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };

    return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'este es un producto creado',
    //   payload,
    // };

    return this.productsService.create(payload);
  }

  @Put(':productId')
  update(@Param('productId') productId: string, @Body() payload: any) {
    return {
      message: 'este es un producto editado',
      payload,
    };
  }

  @Delete(':productId')
  @HttpCode(HttpStatus.OK) // 👈 Using decorator
  DeleteOne(@Param('productId') productId: string) {
    return {
      message: 'este es un producto eliminado',
      productId,
    };
  }
}
