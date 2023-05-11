import { Module } from '@nestjs/common';

// controllers
import { UsersController } from './users.controller';

// providers
import { UsersService } from './users.service';
	controllers: [UsersController],
export class UsersModule {}
