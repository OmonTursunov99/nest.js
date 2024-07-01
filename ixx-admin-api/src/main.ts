import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { TimezoneMiddleware } from "./middleware/timezone.middleware";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(new TimezoneMiddleware().use);

  await app.listen(8428);
}

bootstrap();
