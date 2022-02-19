import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products') //estructura por defecto
export class ProductsController {
  @Get('filter') //las rutas fijas van de primero, las dinamicas al final
  getProductFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get(':productId')
  getOne(@Param('productId') productId: string) {
    return {
      message: 'este es un producto',
      productId,
    };
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0, //desde donde comienza.
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'este es un producto creado',
      payload,
    };
  }
}
