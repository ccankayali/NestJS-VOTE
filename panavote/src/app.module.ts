import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { UserController } from './controller/user.controller';
import { AuthController } from './controller/auth.controller';
import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { UserModule } from './module/user.module';
import { AuthModule } from './module/auth.module';

dotenv.config();

@Module({
  imports: [
    UserModule,
    AuthModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
  ],
  controllers: [AppController, UserController, AuthController],
  providers: [AppService, UserService, AuthService],
})
export class AppModule {}
