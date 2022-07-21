import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    abortOnError: false,
    logger: false,
  });
  app.use(compression());
  await app.listen(port);
  console.log('listening on port : ', port);
}
bootstrap();
