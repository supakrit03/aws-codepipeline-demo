import { Controller, Get } from '@nestjs/common';

interface User {
  name: string;
  dob: Date;
  role: string;
}

@Controller('users')
export class UserController {
  users: User[] = [
    {
      dob: new Date('1997-01-03'),
      name: 'supakrit',
      role: 'Admin',
    },
  ];

  @Get()
  getUsers() {
    return this.users;
  }
}
