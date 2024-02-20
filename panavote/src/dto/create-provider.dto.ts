import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateProviderDto {
  @IsString()
  @MinLength(2)
  companyName: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
