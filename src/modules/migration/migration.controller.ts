import { Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import * as faker from 'faker';
import { Tour } from 'src/modules/tours/entities/tour.entity';
import { TourDocument } from 'src/modules/tours/tour.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Controller('migration')
export class MigrationController {
  constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>) {}

  @Post('/tours')
  async migrateTours(@Res() res: Response) {
    try {
      const seedsTour: Array<Omit<Tour, '_id'>> = [];
      for (let i = 0; i < 50; i++) {
        const categories = ['Quad', 'Beach', 'Mountain', 'Hiking', 'Ballon'];
        const feature = ['Support Kids', 'breakfast', 'Dinner'];
        const selectedCategories = [];
        const selectedFeatures = [];

        feature.forEach((el) => {
          if (Math.floor(Math.random() * 2) == 1) selectedFeatures.push(el);
        });

        categories.forEach((el) => {
          if (Math.floor(Math.random() * 2) == 1) selectedCategories.push(el);
        });

        if (!selectedFeatures.length) {
          selectedFeatures.push(
            feature[Math.floor(Math.random() * feature.length + 0)],
          );
        }

        if (!selectedCategories.length) {
          selectedCategories.push(
            categories[Math.floor(Math.random() * categories.length + 0)],
          );
        }

        seedsTour.push({
          name: faker.random.words(5),
          description: faker.lorem.paragraph(115),
          price: faker.datatype.number({ min: 0 }),
          discount: faker.datatype.number({ min: 0, max: 100 }),
          categories: selectedCategories,
          duration: faker.datatype.datetime(),
          features: selectedFeatures,
          isActive: faker.datatype.boolean(),
          startLocation: faker.address.city(),
          locations: [
            faker.address.city(),
            faker.address.city(),
            faker.address.city(),
          ],
          image: faker.random.image(),
          images: [
            faker.random.image(),
            faker.random.image(),
            faker.random.image(),
          ],
          createdBy: faker.lorem.words(),
          rating: Array.from({ length: 5 }).map((): number =>
            faker.datatype.number({ min: 0, max: 5 }),
          ),
          numberOfbooked: 0,
          createdAt: new Date(),
        });
      }

      await this.tourModel.insertMany(seedsTour);

      res.json({ message: 'SuccessFully Inserted', statusCode: 200 });
    } catch (err) {
      return res.json({
        message: 'Failed to Insert',
        statusCode: 500,
        error: err,
      });
    }
  }

  // @Post('/update')
  // async upadteToursMigration(@Res() res: Response) {
  //   try {
  //     this.tourModel.find().exec((err, data) => {
  //       if (err) return;
  //       data.forEach((tour) => {
  //         if ((typeof tour.rating as unknown) !== 'number') return;
  //         this.tourModel.findByIdAndUpdate(
  //           tour.id,
  //           { $set: { rating: [tour.rating] } },
  //           { new: true },
  //           function (err) {
  //             if (err) return console.log(err);
  //           },
  //         );
  //       });
  //       res.json({ message: 'SuccessFully updated', statusCode: 200 });
  //     });
  //   } catch (err) {}
  // }
}
