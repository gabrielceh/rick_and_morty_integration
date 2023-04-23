import axios from 'axios';
import { urls } from '../../helpers/URL';
import { loaderOff, loaderOn } from './loadingActions';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (userData) => {
	return function (dispatch) {
		dispatch(loaderOn());
		const options = {
			email: userData.email,
			password: userData.password,
			headers: {
				'Content-Type': 'application/json',
			},
		};
		return axios
			.post(`${urls.login}`, options)
			.then(({ data }) => {
				dispatch({
					type: LOGIN,
					payload: data,
				});
			})
			.catch((error) => {
				console.log(error);
				dispatch({
					type: LOGIN,
					payload: error.response.data,
				});
			})
			.finally(() => dispatch(loaderOff()));
	};
};

export const logout = () => {
	return {
		type: LOGOUT,
	};
};
