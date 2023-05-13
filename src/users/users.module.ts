import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// imports
import { EmailModule } from '../email/email.module';

// controllers
import { UsersController } from './users.controller';

// providers
import { UsersService } from './users.service';
import { EmailService } from 'src/email/email.service';
import { UserEntity } from './entity/user.entity';

@Module({
	imports: [EmailModule, TypeOrmModule.forFeature([UserEntity])],
	controllers: [UsersController],
	providers: [UsersService, EmailService],
})
export class UsersModule {}
