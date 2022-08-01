import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Tour } from '../entities/tour.entity';

@ObjectType()
export class GetToursType {
  @Field(() => Int)
  itemsCount: number;

  @Field(() => Int)
  currentPage: number;

  @Field(() => Int)
  itemsOnPage: number;

  @Field(() => [Tour])
  results: Array<Tour>;
}
