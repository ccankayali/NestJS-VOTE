import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv'; // Import dotenv

dotenv.config(); // Load environment variables from .env file

@Module({
  imports: [
    ConfigModule.forRoot(), // Initialize ConfigModule
    MongooseModule.forRoot(process.env.MONGODB_URI), // Use environment variable for MongoDB URI
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
