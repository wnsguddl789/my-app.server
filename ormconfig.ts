import { DataSource } from 'typeorm';

export const MysqlDataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: 'test',
	database: 'my-app',
	entities: ['../**/*.entity{.ts,.js}'],
	synchronize: false,
	migrations: ['../**/migrations/*.js'],
	migrationsTableName: 'migrations',
});

MysqlDataSource.initialize()
	.then(() => {
		console.log('Data Source has been initialized!');
	})
	.catch((err) => {
		console.error('Error during Data Source initialization', err);
	});
