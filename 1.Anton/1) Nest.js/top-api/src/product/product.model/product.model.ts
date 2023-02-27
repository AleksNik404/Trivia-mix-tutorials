import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
class ProductCharacteristic {
  @Prop()
  name: string;

  @Prop()
  value: string;
}

export const ProductCharacteristicSchema = SchemaFactory.createForClass(
  ProductCharacteristic,
);

@Schema({ timestamps: true })
export class ProductModel {
  @Prop()
  image: string;

  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop()
  oldPrice: number;

  @Prop()
  credit: number;

  @Prop()
  calculatedRating: number;

  @Prop()
  deescription: string;

  @Prop()
  advantages: string;

  @Prop()
  disAdvantages: string;

  @Prop({ type: [String] })
  categories: string[];

  @Prop({ type: [String] })
  tags: string[];

  @Prop({ type: [ProductCharacteristicSchema], _id: false })
  characteristics: ProductCharacteristic[];
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
