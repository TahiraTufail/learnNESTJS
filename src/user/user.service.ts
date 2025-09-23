import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
    private users:User[] = [
        {id:1,name:'Tahira',email:"tahira@gmail.com"}
    ]
    getUsers():User[]{
        return this.users
    }
    
    getUserById(id:number)
    {
        if(this.users.find((user)=>id==user.id))
            return this.users.map((user)=>user.name)
        else
            return "user not Found"
        // return this.users.find((users)=> id==users.id) || {message : "Not Found"}
    }
}
