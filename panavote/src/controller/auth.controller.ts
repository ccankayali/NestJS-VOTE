/* eslint-disable prettier/prettier */
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service'; // Corrected import to AuthService
import { LocalAuthGuard } from '../jwt/local-auth.guard'; // Assuming LocalAuthGuard is implemented

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard) 
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}