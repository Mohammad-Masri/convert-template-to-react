import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './product.schema';
import { ProductService } from './product.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'products', // note : name here must be like name in products service
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [ProductService],
})
export class ProductModule {}
