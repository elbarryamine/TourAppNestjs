import { InputType, Field, GraphQLISODateTime } from '@nestjs/graphql';

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

  @Field(() => GraphQLISODateTime)
  duration: Date;

  @Field(() => [String])
  features: string[];

  @Field()
  startLocation: string;

  @Field(() => [String])
  locations: string[];

  // @Field()
  // image: string;

  // @Field(() => [String])
  // images: string[];
}
