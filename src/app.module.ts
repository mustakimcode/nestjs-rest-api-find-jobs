import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { JobController } from './job/job.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, UsersController, JobController],
  providers: [AppService, UsersService, AuthService, PrismaService],
})
export class AppModule {}
