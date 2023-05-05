const base = 'http://localhost:3001/rickandmorty';

export const urls = {
	baseURL: `${base}/character`,
	login: `${base}/login`,
	register: `${base}/login/register`,
	fav: `${base}/favorite`,
	key: process.env.REACT_APP_API_KEY || '804099f03fb2.1c4ebd29f7caa79ffca2',
};
