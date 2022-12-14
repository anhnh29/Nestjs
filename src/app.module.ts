import { ProductEntity } from './product/product.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeController } from './employee/employee.controller';
import { Employee } from './employee/employee.entity';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeService } from './employee/employee.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'elephant-db.cecvzd6zyi6d.ap-southeast-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'study',
      entities: [Employee, ProductEntity],
      synchronize: true,
    }),
    EmployeeModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
