import { Module } from '@nestjs/common';
import { ToursService } from './tours.service';
import { ToursResolver } from './tours.resolver';
import { ToursMongooseModelModule } from 'src/modules/shared/schema/mongoose_tours.module';

@Module({
  imports: [ToursMongooseModelModule],
  providers: [ToursResolver, ToursService],
  controllers: [],
})
export class ToursModule {}
