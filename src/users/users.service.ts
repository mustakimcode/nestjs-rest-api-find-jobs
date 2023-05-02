import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService, // private authService: AuthService,
  ) {}

  async findOne(username: string): Promise<any> {
    const user = this.prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (!user) {
      return null;
    }
    return user;
  }

  // Create a user
  async createUser(input: CreateUserDto): Promise<any> {
    const hashedPassword = await bcrypt.hash(input.password, 10);
    input.password = hashedPassword;
    return this.prisma.user.create({
      data: input,
    });
  }
}
