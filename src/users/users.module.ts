import { Module } from '@nestjs/common';

// imports
import { EmailModule } from '../email/email.module';

// controllers
import { UsersController } from './users.controller';

// providers
import { UsersService } from './users.service';
import { EmailService } from 'src/email/email.service';

@Module({
	imports: [EmailModule],
	controllers: [UsersController],
	providers: [UsersService, EmailService],
})
export class UsersModule {}
