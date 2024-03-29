/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from '../service/user.service';
import { UserController } from '../controller/user.controller';
import { User, UserSchema } from '../entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})

export class UserModule {}
