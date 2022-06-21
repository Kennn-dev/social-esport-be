import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

dotenv.config();

const PORT = process.env.PORT || 4000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT);

  console.log(
    `
      Server run at port http://localhost:${PORT}/ 
      ***
      GraphQL http://localhost:${PORT}/graphql`,
  );
}
bootstrap();
