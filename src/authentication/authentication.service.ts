import { Injectable } from '@nestjs/common';
import { SignUpDTO } from './dto/signup.dto';

@Injectable()
export class AuthenticationService {
  private userData: SignUpDTO[] = [];

  async userSignUp(userName: string, userEmail: string, pass: string) {
    const user = { name: userName, password: pass, email: userEmail };
    this.userData.push(user);
    return user;
  }
  async userLogIn(userEmail: string, pass: string) {
    const currentuser = this.userData.find(
      ({ email, password }) => userEmail === email && password === pass,
    );
    console.log(currentuser);
    console.log('hello world');
    if (currentuser) {
      return `Welcome ${currentuser.name}!`;
    } else return 'user email or password is wrong';
  }

  createUser(name: string, email: string, pass: string) {
    // newUser:SignUpDTO={id: this.userData.length+1, ...user}
    const newuser = { name: name, password: pass, email: email };
    this.userData.push(newuser);
    return this.userData;
  }
  //partial updation:patch full updation put..
  async updateUser(
    id: number,
    userDTO: { name: string; email: string },
  ): SignUpDTO | { message: string } {
    const uIndex = this.userData.findIndex((user) => user.id === id); //since Sign Up DTO don't have id attribute
    if (uIndex !== -1) {
      this.userData[uIndex] = { id, ...userDTO };
      return this.userData[uIndex];
    }
    return { message: 'user not found' };
  }

  partialUpdateUser(
    id: number,
    userDTO: Partial<SignUpDTO>,
  ): SignUpDTO | { message: string } {
    const user = this.userSignUp.find((user) => user.id === id); //this fun works on only arrays
    if (!user) return { message: 'user not found' };
    Object.assign(user, SignUpDTO);
    return user;
  }
  deleteUser(id: number): string {
    const index = this.userSignUp.findIndex((user) => user.id === id); //fun works only on arrays
    if (index === -1) return `user id: ${id} not found`;
    this.userSignUp.splice(index, 1); //fun works only on arrays
    return `user with id number ${id} has been deleted`;
  }
}
