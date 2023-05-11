import { Matches, IsString, IsEmail, MinLength, MaxLength } from 'class-validator';
import { Transform } from 'class-transformer';

import { NotIn } from 'src/decorators/NotIn';
export class CreateUserDto {
	@IsEmail()
	@IsString()
	@MinLength(1)
	@MaxLength(60)
	readonly email: string;

	@Transform(({ value }) => value.trim())
	@IsString()
	@MinLength(1)
	@MaxLength(20)
	readonly name: string;

	@Transform(({ value }) => value.trim())
	@NotIn('password', { message: 'password는 name과 같은 문자열을 포함할 수 없습니다.' })
	@IsString()
	@Matches(/^[A-Za-z\d!@#$%^&*()]{8,16}$/)
	readonly password: string;
}
