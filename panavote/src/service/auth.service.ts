/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<typeof User>, private jwtService: JwtService ) {}
    
    async login(user: any): Promise<{ access_token: string }> {
    const payload = { username: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async createUser(createUserDto: CreateUserDto): Promise<typeof User> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  async findOne(email: string): Promise<typeof User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async findAllUsers(): Promise<typeof User[]> {
    return this.userModel.find().exec();
  }
}
