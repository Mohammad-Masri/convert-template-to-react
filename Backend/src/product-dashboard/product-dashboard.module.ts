import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'src/product/product.schema';
import { ProductService } from 'src/product/product.service';
import { ProductDashboardController } from './product-dashboard.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'products', // note : name here must be like name in products service
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [ProductDashboardController],
  providers: [ProductService],
})
export class ProductDashboardModule {}
