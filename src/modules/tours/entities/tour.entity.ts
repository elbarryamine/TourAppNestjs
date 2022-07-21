import {
  ObjectType,
  Field,
  GraphQLISODateTime,
  Int,
  Float,
} from '@nestjs/graphql';

import { UploadScalar } from 'src/modules/shared/graphql/UploadScalar';
import type { FileUpload } from 'src/modules/shared/graphql/UploadScalar';

@ObjectType()
export class Tour {
  @Field({ name: 'id' })
  _id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field()
  discount: number;

  @Field(() => [String])
  categories: string[];

  @Field(() => Float)
  duration: number;

  @Field(() => [String])
  features: string[];

  @Field()
  startLocation: string;

  @Field(() => [String])
  locations: string[];

  @Field(() => UploadScalar)
  image: FileUpload;

  @Field(() => [UploadScalar])
  images: FileUpload[];

  @Field()
  isActive: boolean;

  @Field(() => [Int])
  rating: number[];

  @Field()
  numberOfbooked: number;

  @Field()
  createdBy: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;
}
