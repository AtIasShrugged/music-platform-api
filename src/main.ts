import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  try {
    const PORT = process.env.PORT || 5555;
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

bootstrap();
