import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import * as compression from 'compression';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Security middleware
  app.use(helmet());
  app.use(compression());

  // CORS configuration
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001', 
      'https://propertyos.com',
      'https://*.propertyos.com'
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Global prefix
  app.setGlobalPrefix('api');

  // Swagger API Documentation
  const config = new DocumentBuilder()
    .setTitle('PropertyOS API')
    .setDescription('Enterprise Property Management API')
    .setVersion('1.0.0')
    .addBearerAuth()
    .addTag('authentication', 'Authentication endpoints')
    .addTag('properties', 'Property management')
    .addTag('tenants', 'Tenant management')
    .addTag('maintenance', 'Maintenance requests')
    .addTag('payments', 'Payment processing')
    .addTag('vendors', 'Vendor marketplace')
    .addTag('reports', 'Analytics and reporting')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
    customSiteTitle: 'PropertyOS API Docs',
  });

  // Health check endpoint
  app.getHttpAdapter().get('/health', (req, res) => {
    res.status(200).json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'PropertyOS Gateway',
      version: '1.0.0',
      uptime: process.uptime(),
    });
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`🚀 PropertyOS Gateway running on http://localhost:${port}`);
  console.log(`📚 API Documentation: http://localhost:${port}/docs`);
  console.log(`🏥 Health Check: http://localhost:${port}/health`);
}

bootstrap();