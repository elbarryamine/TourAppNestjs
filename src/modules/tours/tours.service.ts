import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTourInput } from './dto/create-tour.input';
import { UpdateTourInput } from './dto/update-tour.input';
import { TourDocument, Tour } from './entities/tour.schema';
import Joi from 'joi';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ToursService {
  constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>) {}

  async findAll(page?: number, pageSize?: number) {
    try {
      if (!page && !pageSize) return await this.tourModel.find();

      const currentPage = page && page > 0 ? page - 1 : 0;
      const itemsPerPage = pageSize ? pageSize : 10;

      return await this.tourModel
        .find()
        .skip(currentPage * itemsPerPage)
        .limit(itemsPerPage);
    } catch {
      throw new HttpException(
        'could not get any results',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async findOne(id: string): Promise<Tour> {
    try {
      return await this.tourModel.findById(id);
    } catch {
      throw new HttpException(
        'could not get any results',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async create(createTourInput: CreateTourInput) {
    try {
      console.log(createTourInput);

      // const isValid = this.validateTour(createTourInput);
      // if (!isValid)
      //   throw new HttpException('Invalid Tour', HttpStatus.FORBIDDEN);

      const isTourNameValid = await this.tourModel.findOne({
        name: createTourInput.name,
      });

      if (isTourNameValid)
        throw new HttpException(
          'Tour with same name already exist',
          HttpStatus.FORBIDDEN,
        );

      const newTour = new this.tourModel<Tour>({
        ...createTourInput,
        image: JSON.stringify(createTourInput.image),
        images: createTourInput.images.map((el) => JSON.stringify(el)),
      });
      console.log(newTour);

      await newTour.save();
      return newTour;
    } catch (err) {
      throw new HttpException('Something went wrong', HttpStatus.FORBIDDEN);
    }
  }

  update(id: string, updateTourInput: UpdateTourInput) {
    return `This action updates a #${id} ${updateTourInput.id} tour`;
  }

  remove(id: string) {
    return `This action removes a #${id} tour`;
  }

  validateTour(tour: CreateTourInput): boolean {
    const schema = Joi.object<CreateTourInput>({
      name: Joi.string().min(3).max(255).alphanum().required(),
      categories: Joi.array().items(Joi.string()).required(),
      description: Joi.string().min(3).alphanum().required(),
      price: Joi.number().min(0).required(),
      discount: Joi.number().min(0).required(),
      features: Joi.array().items(Joi.string()).required(),
      locations: Joi.array().items(Joi.string()).required(),
      startLocation: Joi.string().required(),
      duration: Joi.date().required(),
      // image: Joi.string().required(),
      // images: Joi.array().items(Joi.string()).required(),
    });
    const result = schema.validate(tour);
    if (result.error || result.warning) {
      return false;
    } else {
      return true;
    }
  }
}
