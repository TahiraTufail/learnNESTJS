import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class SignUpDTO {

  @IsOptional()
  @IsNumber()
  id?: number

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;
  
  @IsString()
  @IsNotEmpty()
  password: string;
}
 