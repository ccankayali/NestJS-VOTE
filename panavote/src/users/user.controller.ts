/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";
import { User } from "../Schemas/user.schema"; // Make sure the path is correct

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto);
    }

    @Get()
    async findAllUsers(): Promise<User[]> {
        return this.userService.findAllUsers(); // Corrected method name here
    }
}
