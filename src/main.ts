import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import * as fs from 'fs';

const logFile = fs.createWriteStream('./logs/app.log', { flags: 'a' });
const logger = new Logger();


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: {
      log: (message: string) => {
        console.log(message);
        logFile.write(JSON.stringify({ level: 'info', message, timestamp: new Date() }) + '\n');
      },
      error: (message: string, trace: string) => {
        console.error(message, trace);
        logFile.write(JSON.stringify({ level: 'error', message, trace, timestamp: new Date() }) + '\n');
      },
      warn: (message: string) => {
        console.warn(message);
        logFile.write(JSON.stringify({ level: 'warn', message, timestamp: new Date() }) + '\n');
      },
      debug: (message: string) => {
        console.debug(message);
        logFile.write(JSON.stringify({ level: 'debug', message, timestamp: new Date() }) + '\n');
      },
      verbose: (message: string) => {
        console.log(message);
        logFile.write(JSON.stringify({ level: 'verbose', message, timestamp: new Date() }) + '\n');
      },
    },
  });


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
