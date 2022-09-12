import { ProductService } from './product.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { productItem } from './model/product.interface';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  //   @Get(':id')
  //   findOne(@Param('id') id: number) {
  //     return this.productService.findOne(id);
  //   }

  //   @Post()
  //   create(@Body() body: productItem) {
  //     return this.productService.create(body);
  //   }
  //   @Put(':id')
  //   update(@Param('id') id: number, @Body() body: productItem) {
  //     return this.productService.update(id, body);
  //   }
  //   @Delete(':id')
  //   delete(@Param('id') id: number) {
  //     return this.productService.delete(id);
  //   }
}
