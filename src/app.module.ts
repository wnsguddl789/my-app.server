import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';


@Module({
		UsersModule,
})
export class AppModule {}
