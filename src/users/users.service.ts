import * as uuid from 'uuid';
import { ulid } from 'ulid';

import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';

import { EmailService } from '../email/email.service';
import { UserInfo } from './interfaces/UserInfo';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UsersService {
	constructor(
		private emailService: EmailService,
		@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>,
		private dataSource: DataSource,
	) {}

	public async createUser(name: string, email: string, password: string) {
		const userExist = await this.checkUserExists(email);
		if (userExist) throw new UnprocessableEntityException('해당 이메일로는 가입할 수 없습니다.');

		const signupVerifyToken = uuid.v1();

		await this.saveUser(name, email, password, signupVerifyToken);
		await this.sendMemberJoinEmail(email, signupVerifyToken);
	}

	public async verifyEmail(signupVerifyToken: string): Promise<string> {
		// TODO
		// 1. DB에서 signupVerifyToken으로 회원가입 처리중인 유저 유무 조회 -> 없다면 에러 처리
		// 2. 바로 로그인 상태가 되도록 JWT 발급
		throw new Error('Method not implemented');
	}

	public async login(email: string, password: string): Promise<string> {
		// TODO
		// 1. email, password를 가진 유저가 존재하는지 DB에서 조회 -> 없다면 에러 처리
		// 2. JWT 발급
		throw new Error('Method not implemented');
	}

	public async getUserInfo(userId: string): Promise<UserInfo> {
		// TODO
		// 1. userId를 가진 유저가 존재하는지 DB에서 조회 -> 없다면 에러 처리
		// 2. 조회된 데이터를 UserInfo 타입으로 응답
		throw new Error('Method not implemented');
	}

	private async checkUserExists(emailAddress: string): Promise<boolean> {
		const user = await this.usersRepository.findOne({
			where: { email: emailAddress },
		});

		return user !== undefined;
	}

	private async saveUser(name: string, email: string, password: string, signupVerifyToken: string): Promise<void> {
		const user = new UserEntity();

		user.id = ulid();
		user.name = name;
		user.email = email;
		user.password = password;
		user.signupVerifyToken = signupVerifyToken;

		await this.usersRepository.save(user);
	}

	private async saveUserUsingQueryRunner(name: string, email: string, password: string, signupVerifyToken: string) {
		const queryRunner = this.dataSource.createQueryRunner();

		await queryRunner.connect();
		await queryRunner.startTransaction();

		try {
			const user = new UserEntity();

			user.id = ulid();
			user.name = name;
			user.email = email;
			user.password = password;
			user.signupVerifyToken = signupVerifyToken;

			await queryRunner.manager.save(user);
		} catch (e) {
			await queryRunner.rollbackTransaction();
		} finally {
			await queryRunner.release();
		}
	}

	private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
		await this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
	}
}
