/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../service/user.service';
import { User } from '../entities/user.entity'; // Süslü parantezler olmadan doğru bir şekilde içe aktarın

@Controller('/users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/register')
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto);
    }

    @Get('/users')
    async findAllUsers(): Promise<(User)[]> {
        return this.userService.findAllUsers();
    }
}
