import { Body, Controller, Delete, Param, Patch, Post, Put } from '@nestjs/common';
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

  //PUT - Replace a user
    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: { name: string; email: string }) {
        return this.authService.updateUser(Number(id), updateUserDto);
    }

    //PATCH - Partially Update a User
    @Patch(':id')
    partiallyUpdateUser(@Param('id') id: string, @Body() updateUserDto: Partial<SignUpDTO>) {
        return this.authService.partialUpdateUser(Number(id), updateUserDto)
    }

    //DELETE - Delete a User
    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.authService.deleteUser(Number(id));}
}


