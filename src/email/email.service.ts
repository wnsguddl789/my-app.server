import Mail = require('nodemailer/lib/mailer');
import * as nodemailer from 'nodemailer';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

interface EmailOptions {
	to: string;
	subject: string;
	html: string;
}

@Injectable()
export class EmailService {
	private transport: Mail;

	constructor(private configService: ConfigService) {
		this.transport = nodemailer.createTransport({
			service: this.configService.get<string>('email.service'),
			auth: {
				user: this.configService.get<string>('email.auth.user'),
				pass: this.configService.get<string>('email.auth.password'),
			},
		});
	}
	async sendMemberJoinVerification(emailAddress: string, signupVerifyToken: string) {
		const baseUrl = this.configService.get<string>('email.baseUrl');

		const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;

		const mailOptions: EmailOptions = {
			to: emailAddress,
			subject: '가입 인증 메일',
			html: /* html */ `
                가입확인 버튼을 누르면 가입 인증이 완료됩니다.<br/>
                <form action="${url}" method="POST">
                    <button type="submit">가입확인</button>
                </form>
            `,
		};

		return await this.transport.sendMail(mailOptions);
	}
}
