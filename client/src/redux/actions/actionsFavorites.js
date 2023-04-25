import axios from 'axios';
import { urls } from '../../helpers/URL';

//  ACTION FAVORITES
export const GET_FAVS = 'GET_FAVS';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER_FAV = 'FILTER_FAV';
export const ORDER_FAV = 'ORDER_FAV';

// ACTION CREATORS FVORITES

export const getFavs = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`${urls.fav}/`);
			return dispatch({
				type: GET_FAVS,
				payload: { data, error: null },
			});
		} catch (error) {
			return dispatch({
				type: GET_FAVS,
				payload: { error: error.message },
			});
		}
	};
};

export const addFav = (character) => {
	return async (dispatch) => {
		const options = {
			...character,
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const { data } = await axios.post(`${urls.fav}`, options);
			return dispatch({
				type: ADD_FAV,
				payload: { data, error: null },
			});
		} catch (error) {
			return dispatch({
				type: ADD_FAV,
				payload: { error: error.message },
			});
		}
	};
};

export const removeFav = (id) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.delete(`${urls.fav}/${id}`);
			return dispatch({
				type: REMOVE_FAV,
				payload: { data, error: null },
			});
		} catch (error) {
			return dispatch({
				type: REMOVE_FAV,
				payload: { error: error.message },
			});
		}
	};
};

export const filterFav = (gender) => {
	return {
		type: FILTER_FAV,
		payload: gender,
	};
};

export const orderFav = (order) => {
	return {
		type: ORDER_FAV,
		payload: order,
	};
};
