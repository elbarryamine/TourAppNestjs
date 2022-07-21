import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ collection: 'tours' })
export class Tour {
  @Prop({ required: true })
  name: string;

  @Prop({ minlength: 115, required: true })
  description: string;

  @Prop({ min: 0, required: true })
  price: number;

  @Prop({ min: 0, max: 100, required: true })
  discount: number;

  @Prop({ type: [String], required: true })
  categories: string[];

  @Prop({ required: true })
  duration: number;

  @Prop({ type: [String], required: true })
  features: string[];

  @Prop({ required: true })
  startLocation: string;

  @Prop({ type: [String], required: true })
  locations: string[];

  @Prop({ required: true })
  image: string;

  @Prop({ type: [String], required: true })
  images: string[];

  @Prop({ default: false })
  isActive?: boolean;

  @Prop({ type: [Number], min: 0, max: 5, default: [0] })
  rating?: number[];

  @Prop({ default: 0, min: 0 })
  numberOfbooked?: number;

  @Prop({ default: new Date() })
  createdAt?: Date;

  @Prop({ default: null })
  createdBy?: string;
}

export type TourDocument = Tour & Document;

export const TourSchema = SchemaFactory.createForClass(Tour);
export const ToursModel = mongoose.model('Tours', TourSchema);
