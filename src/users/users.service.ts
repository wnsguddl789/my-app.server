import * as uuid from 'uuid';

import { Injectable } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { UserInfo } from './interfaces/UserInfo';

@Injectable()
export class UsersService {
	constructor(private emailService: EmailService) {}

	public async createUser(name: string, email: string, password: string) {
		await this.checkUserExists(email);

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

	private async checkUserExists(email: string): Promise<boolean> {
		// TODO DB 연동후 구현
		return false;
	}

	private async saveUser(name: string, email: string, password: string, signupVerifyToken: string) {
		// TODO DB 연동후 구현
		return;
	}

	private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
		await this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
	}
}
