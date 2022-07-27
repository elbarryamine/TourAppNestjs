import {
  ObjectType,
  Field,
  GraphQLISODateTime,
  Int,
  Float,
} from '@nestjs/graphql';

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

  @Field(() => String)
  image: string;

  @Field(() => [String])
  images: string[];

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
