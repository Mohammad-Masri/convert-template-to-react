import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProductService } from 'src/product/product.service';
import IProduct from 'src/product/product.interface';
import { CreateProductInput } from './dto/CreateProductInput.dto';

@Controller('dashboard/product')
@ApiTags('Product | Dashboard')
export class ProductDashboardController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  @ApiOkResponse({
    type: IProduct,
    isArray: true,
  })
  async getAllProducts() {
    const products = await this.productService.findAll();
    return products;
  }

  @Get('/:product_id')
  @ApiOkResponse({
    type: IProduct,
  })
  async getProduct(@Param('product_id') product_id: string) {
    const product = await this.productService.checkIfFindByIdAndGetIt(
      product_id,
    );
    return product;
  }

  @Post('/')
  @ApiOkResponse({
    type: IProduct,
    isArray: true,
  })
  async createNewProduct(@Body() createProductInput: CreateProductInput) {
    await this.productService.create(
      createProductInput.title,
      createProductInput.price,
    );

    const products = await this.productService.findAll();
    return products;
  }

  @Put('/:product_id')
  @ApiOkResponse({
    type: IProduct,
    isArray: true,
  })
  async updateProduct(
    @Param('product_id') product_id: string,
    @Body() createProductInput: CreateProductInput,
  ) {
    const product = await this.productService.checkIfFindByIdAndGetIt(
      product_id,
    );

    await this.productService.update(
      product,
      createProductInput.title,
      createProductInput.price,
    );

    const products = await this.productService.findAll();
    return products;
  }

  @Delete('/:product_id')
  @ApiOkResponse({
    type: IProduct,
    isArray: true,
  })
  async deleteProduct(@Param('product_id') product_id: string) {
    const product = await this.productService.checkIfFindByIdAndGetIt(
      product_id,
    );

    await this.productService.delete(product);

    const products = await this.productService.findAll();
    return products;
  }
}
