import { Injectable } from '@nestjs/common';
//all logics will be written here..
@Injectable()
export class AppService {
  getHello(): number[] {
    return [1,23,45,6,9];
  }
}
