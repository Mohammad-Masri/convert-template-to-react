import { ApiProperty } from '@nestjs/swagger';

export class CreateProductInput {
  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: Number })
  price: number;
}
