import axios from 'axios';
import { urls } from '../../helpers/URL';
import { loaderOff, loaderOn } from './loadingActions';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';

export const login = (userData) => {
	return async function (dispatch) {
		dispatch(loaderOn());
		const options = {
			email: userData.email,
			password: userData.password,
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const { data } = await axios.post(`${urls.login}`, options);
			console.log(data);
			dispatch({
				type: LOGIN,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: LOGIN,
				payload: error.response.data,
			});
		} finally {
			dispatch(loaderOff());
		}
	};
};

export const registerUser = (userData) => {
	return async function (dispatch) {
		dispatch(loaderOn);
		const options = {
			email: userData.email,
			password: userData.password,
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const { data } = await axios.post(`${urls.register}`, options);
			dispatch({
				type: REGISTER,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: REGISTER,
				payload: error.response.data,
			});
		} finally {
			dispatch(loaderOff());
		}
	};
};

export const logout = () => {
	return {
		type: LOGOUT,
	};
};
