import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PORT,
} from './config/server_constant';
import { ProductModule } from './product/product.module';
import { ProductDashboardModule } from './product-dashboard/product-dashboard.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`,
    ),
    ProductModule,
    ProductDashboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
