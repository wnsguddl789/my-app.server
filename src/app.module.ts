import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

// imports
import { UsersModule } from './users/users.module';

import configuration from './config/configuration';
import { validationSchema } from './config/validationSchema';

@Module({
	imports: [
		UsersModule,
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: process.env.DATABASE_HOST || 'localhost',
			port: 3306,
			username: process.env.DATABASE_USERNAME || 'root',
			password: process.env.DATABASE_PASSWORD || 'test',
			database: process.env.DATABASE_NAME || 'my-app',
			entities: [__dirname + '/**/*.entity{.ts,.js}'],
			synchronize: false,
			// synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE),
			migrationsRun: false,
			migrations: [__dirname + '/**/migrations/*.js'],
			migrationsTableName: 'migrations',
		}),
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
