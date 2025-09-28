import { IsNotEmpty, IsString } from 'class-validator';

export class logInDTO {
  @IsString()
  @IsNotEmpty()
  userEmail: string;

  @IsString()
  @IsNotEmpty()
  pass: string;

}
