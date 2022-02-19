import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products') //estructura por defecto
export class ProductsController {
  @Get('filter') //las rutas fijas van de primero, las dinamicas al final
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0, //desde donde comienza.
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }
}
