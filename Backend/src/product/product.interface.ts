import { ApiProperty } from '@nestjs/swagger';
import { Document, ObjectId } from 'mongoose';

export default class IProduct extends Document {
  @ApiProperty({ type: String })
  id: ObjectId;
  @ApiProperty({ type: String })
  title: string;
  @ApiProperty({ type: Number })
  price: number;
  @ApiProperty({ type: String })
  readonly created_at: Date;
}
