import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignUpDTO } from './dto/signup.dto';
import { logInDTO } from './dto/signin.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}
  
  @Post('signUp')
  async signUp(@Body() userData: SignUpDTO) {
    return await this.authService.userSignUp(
      userData.name,
      userData.email,
      userData.password,
    );
  }

  @Post('login')
  async userLogIn(@Body() userData: logInDTO) {
    return await this.authService.userLogIn(userData.userEmail, userData.pass);
  }
}
