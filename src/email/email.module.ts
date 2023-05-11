import { Module } from '@nestjs/common';

// providers
import { EmailService } from './email.service';
	exports: [EmailService],
export class EmailModule {}
