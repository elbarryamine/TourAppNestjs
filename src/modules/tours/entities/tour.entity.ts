import { ObjectType, Field, GraphQLISODateTime, Int } from '@nestjs/graphql';

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

  @Field(() => [Int])
  rating: number[];

  @Field(() => GraphQLISODateTime)
  duration: Date;

  @Field(() => [String])
  features: string[];

  @Field()
  isActive: boolean;

  @Field()
  startLocation: string;

  @Field(() => [String])
  locations: string[];

  @Field()
  image: string;

  @Field(() => [String])
  images: string[];

  @Field()
  numberOfbooked?: number;

  @Field(() => GraphQLISODateTime)
  createdAt?: Date;

  @Field()
  createdBy?: string;
}
