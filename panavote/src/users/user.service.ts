/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users: user[] = []; 

    async createUser(createUser: createUserDto) {
        const newUser = new User(
            Math.random().toString(),
            createUser.name,
            createUser.email,
            createUser.password,
        );
        this.users.push(newUser);
        return newUser;
    }

    async findAllUser(): Promise<User[]> {
        return [...this.users];
    }
}
