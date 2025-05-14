import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('User API')
  .setDescription('API para gestionar usuarios')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); 

  await app.listen(process.env.PORT ?? 3000);
  console.log(`✅ App is listening on port ${process.env.PORT ?? 3000}`);
}
bootstrap().catch((err)=>{
  console.error('Error al iniciar la app:', err);
  process.exit(1);

});
