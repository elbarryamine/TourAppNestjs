import {
  Controller,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { Model } from 'mongoose';
import { Tour, TourDocument } from './entities/tour.schema';

@Controller('tours')
export class ToursController {
  constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>) {}

  @Post('/upload/:id')
  @UseInterceptors(AnyFilesInterceptor())
  async upload(
    @UploadedFiles() images: Array<Express.Multer.File>,
    @Param('id') id: string,
  ) {
    console.log(
      images.filter((img) => img.fieldname === 'images'),
      images.filter((img) => img.fieldname === 'image')[0],
      id,
    );
    return {
      data: 'ok',
    };
  }
}
