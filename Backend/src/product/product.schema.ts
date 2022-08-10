/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { currDate } from '../helper/moment.helper';

export const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: currDate(),
  },
});

ProductSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc: any, ret: any) {
    delete ret._id;
  },
});
