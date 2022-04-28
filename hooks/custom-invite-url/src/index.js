export default ({ filter }, { env, services, exceptions }) => {
	const func = async (authenticate, context) => {
		const { req } = context
		if (req.url === '/users/invite') {
			if (req.body) {
				req.body.invite_url = env.USER_INVITE_URL_ALLOW_LIST
			}
		}
		return
	}

	filter('authenticate', func);
};