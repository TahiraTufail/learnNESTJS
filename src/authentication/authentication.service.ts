import { Injectable } from '@nestjs/common';
import { SignUpDTO } from './dto/signup.dto';
//schemas are for service AND controller mein dto(Standard)
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
  updateUser(
    id: number,
    userDTO: { name: string; email: string ; password: string},
  ): SignUpDTO | { message: string } {
    const uIndex = this.userData.findIndex((user) => user.id === id); //since Sign Up DTO don't have id attribute
    if (uIndex !== -1) {
      //spread operator : used on collection 
      this.userData[uIndex] = {id, ...userDTO };
      return this.userData[uIndex];
    }
    return { message: 'user not found' };
  }
//async always return Promise....
  partialUpdateUser(
    id: number,
    userDTO: Partial<SignUpDTO>,
  ): SignUpDTO | { message: string } {
    const user = this.userData.find((user) => user.id === id); //this fun works on only arrays
    if (!user) return { message: 'user not found' };
    Object.assign(user, userDTO);
    return user;
  }

  
  deleteUser(id: number): string {
    const index = this.userData.findIndex((user) => user.id === id); //fun works only on arrays
    if (index === -1) return `user id: ${id} not found`;
    this.userData.splice(index, 1); //fun works only on arrays
    return `user with id number ${id} has been deleted`;
  }
}
