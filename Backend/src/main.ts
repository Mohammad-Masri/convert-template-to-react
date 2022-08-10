import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SERVER_PORT } from './config/server_constant';
import { ProductDashboardModule } from './product-dashboard/product-dashboard.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const swagger_document = new DocumentBuilder()
    .setTitle('Mohammed Masri test API')
    .setVersion('1.0.0')
    .build();

  const swagger_document_module = SwaggerModule.createDocument(
    app,
    swagger_document,
    {
      include: [ProductDashboardModule],
    },
  );

  SwaggerModule.setup(`/api-docs`, app, swagger_document_module);

  await app.listen(SERVER_PORT).finally(() => {
    console.log(`server running in: http://localhost:${SERVER_PORT}`);
    console.log(
      `you can see swagger docs in: http://localhost:${SERVER_PORT}/api-docs`,
    );
  });
}
bootstrap();
