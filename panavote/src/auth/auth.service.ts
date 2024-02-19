/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../Schemas/user.schema'; // Ensure correct path
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>, private userService: UserService,
    private jwtService: JwtService ) {}
    
    async login(user: any): Promise<{ access_token: string }> {
    // Implementation for generating JWT token
    const payload = { username: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  // Correctly implement findOne
  async findOne(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  // Implement findAllUsers if needed
  async findAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
