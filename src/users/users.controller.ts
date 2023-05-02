import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    const isExist = await this.userService.findOne(createUserDto.username);
    if (isExist) {
      throw new HttpException('User Already Exist!!', HttpStatus.FORBIDDEN);
    }
    return await this.userService.createUser(createUserDto);
  }
}
