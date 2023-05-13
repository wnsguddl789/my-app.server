import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('User')
export class UserEntity {
	@PrimaryColumn()
	id: string;

	@Column({ length: 20 })
	name: string;

	@Column({ length: 60 })
	email: string;

	@Column({ length: 16 })
	password: string;

	@Column({ length: 60 })
	signupVerifyToken: string;
}
