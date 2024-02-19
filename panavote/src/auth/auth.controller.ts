import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { UserService } from './auth.service'; // Corrected import to AuthService
import { LocalAuthGuard } from './jwt/local-auth.guard'; // Assuming LocalAuthGuard is implemented

@Controller('auth')
export class AuthController {
  constructor(private authService: UserService) {} // Corrected to AuthService

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
