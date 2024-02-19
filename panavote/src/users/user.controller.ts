/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";

/* eslint-disable prettier/prettier */
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() createUSerDto: CreateUserDto) {
        return await this.userService.createUser(createUSerDto);
    }

    @Get()
    async getUsers() {
        return await this.userService.getUsers();
    }
}