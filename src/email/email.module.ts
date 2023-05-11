import { Module } from '@nestjs/common';

// providers
import { EmailService } from './email.service';
import { ConfigService } from '@nestjs/config';

@Module({
	providers: [ConfigService, EmailService],
	exports: [EmailService],
})
export class EmailModule {}
