import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ToursService } from './tours.service';
import { Tour } from './entities/tour.entity';
import { CreateTourInput } from './dto/create-tour.input';
import { UpdateTourInput } from './dto/update-tour.input';

@Resolver(() => Tour)
export class ToursResolver {
  constructor(private readonly toursService: ToursService) {}

  @Query(() => [Tour], { name: 'GetAllTours' })
  findAll(
    @Args('page', { type: () => Int, nullable: true }) page?: number,
    @Args('pageSize', { type: () => Int, nullable: true }) pageSize?: number,
  ) {
    return this.toursService.findAll(page, pageSize);
  }

  @Query(() => Tour, { name: 'GetOneTour', nullable: true })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.toursService.findOne(id);
  }

  @Mutation(() => Tour)
  createTour(@Args('createTourInput') createTourInput: CreateTourInput) {
    return this.toursService.create(createTourInput);
  }

  @Mutation(() => Tour)
  updateTour(@Args('updateTourInput') updateTourInput: UpdateTourInput) {
    return this.toursService.update(updateTourInput.id, updateTourInput);
  }

  @Mutation(() => Tour)
  removeTour(@Args('id', { type: () => Int }) id: string) {
    return this.toursService.remove(id);
  }
}
