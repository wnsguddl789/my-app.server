export default () => ({
	email: {
		service: process.env.EMAIL_SERVICE,
		auth: {
			user: process.env.EMAIL_AUTH_USER,
			password: process.env.EMAIL_AUTH_PASSWORD,
		},
		baseUrl: process.env.EMAIL_BASE_URL,
	},
});
