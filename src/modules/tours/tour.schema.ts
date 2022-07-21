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

  @Prop({ type: [Number], min: 0, max: 5, required: true, default: [] })
  rating: number[];

  @Prop({ required: true })
  duration: Date;

  @Prop({ type: [String], required: true })
  features: string[];

  @Prop({ default: false, required: true })
  isActive: boolean;

  @Prop({ required: true })
  startLocation: string;

  @Prop({ type: [String], required: true })
  locations: string[];

  @Prop({ required: true })
  image: string;

  @Prop({ type: [String], required: true })
  images: string[];

  @Prop({ default: 0, min: 0 })
  numberOfbooked: number;

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop({ default: null })
  createdBy: string;
}

export type TourDocument = Tour & Document;

export const TourSchema = SchemaFactory.createForClass(Tour);
export const ToursModel = mongoose.model('Tours', TourSchema);
