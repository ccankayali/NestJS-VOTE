/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from './user.module';
import { CreateUserDto } from './dto/create-user.dto'; 

@Injectable()
export class UserService {
    users: any;
    async createUser(createUser: CreateUserDto) { 
        const newUser = new User(createUser); 
        this.users.push(newUser);
        return newUser;
    }

    async findAllUser(): Promise<User[]> {
        return [...this.users];
    }
}
