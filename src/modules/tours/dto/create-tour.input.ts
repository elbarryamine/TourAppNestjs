import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateTourInput {
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
}
