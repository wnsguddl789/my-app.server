import { Module } from '@nestjs/common';

// imports
import { EmailModule } from '../email/email.module';

// controllers
import { UsersController } from './users.controller';

// providers
import { UsersService } from './users.service';
	imports: [EmailModule],
	controllers: [UsersController],
export class UsersModule {}
