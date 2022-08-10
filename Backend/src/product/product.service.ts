import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import ServerError from 'src/errors/ServerError';
import { PRODUCT_NOT_FOUND } from 'src/errors/ServerErrorCodes';
import IProduct from './product.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('products')
    private readonly ProductModel: Model<IProduct>,
  ) {}

  public async findAll() {
    const products = await this.ProductModel.find({}).sort({ created_at: -1 });
    return products;
  }

  public async findById(id: ObjectId | string) {
    const product = await this.ProductModel.findById(id);
    return product;
  }

  public async checkIfFindByIdAndGetIt(id: string | ObjectId) {
    const product = await this.findById(id);
    if (product == null) {
      throw new ServerError(
        HttpStatus.NOT_FOUND,
        PRODUCT_NOT_FOUND,
        `product with id ${id} not found`,
      );
    }
    return product;
  }

  public async create(title: string, price: number) {
    const product = new this.ProductModel({ title, price });
    return await product.save();
  }

  public async update(product: IProduct, title: string, price: number) {
    product.title = title;
    product.price = price;
    return await product.save();
  }

  public async delete(product: IProduct) {
    return await product.remove();
  }
}
