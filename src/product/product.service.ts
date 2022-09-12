import { ProductEntity } from './product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}
  findAll(): Promise<any[]> {
    return this.productRepository.find();
  }
  //   findOne() {}
  //   update() {}
  //   delete() {}
}
