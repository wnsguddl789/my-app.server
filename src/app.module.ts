import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// imports
import { UsersModule } from './users/users.module';

import configuration from './config/configuration';
import { validationSchema } from './config/validationSchema';

@Module({
	imports: [
		UsersModule,
		ConfigModule.forRoot({
			envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
			load: [configuration],
			isGlobal: true,
			validationSchema,
		}),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
