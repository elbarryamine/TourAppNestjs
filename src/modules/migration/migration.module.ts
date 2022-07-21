import { Module } from '@nestjs/common';
import { ToursMongooseModelModule } from 'src/modules/shared/schema/mongoose_tours.module';
import { MigrationController } from './migration.controller';

@Module({
  imports: [ToursMongooseModelModule],
  controllers: [MigrationController],
})
export class MigrationModule {}
