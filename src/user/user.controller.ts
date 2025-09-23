import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // @Get()
  // getUsers() {
  //   return this.userService.getUsers();
  // }
  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.userService.getUserById(1); 
  }
}
