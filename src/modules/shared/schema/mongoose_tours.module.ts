import { Module } from '@nestjs/common';
import { Tour } from 'src/modules/tours/entities/tour.entity';
import { TourSchema } from 'src/modules/tours/tour.schema';
import { MongooseModule } from '@nestjs/mongoose';

const MongooseModuleInit = MongooseModule.forFeature([
  { name: Tour.name, schema: TourSchema },
]);

@Module({
  imports: [MongooseModuleInit],
  exports: [MongooseModuleInit],
})
export class ToursMongooseModelModule {}
