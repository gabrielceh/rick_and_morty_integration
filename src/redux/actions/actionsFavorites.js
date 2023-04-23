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
	return (dispatch) => {
		return axios(`${urls.fav}`)
			.then((res) => res.data)
			.then((data) => {
				return dispatch({
					type: GET_FAVS,
					payload: data,
				});
			});
	};
};

export const addFav = (character) => {
	return (dispatch) => {
		const options = {
			...character,
			headers: {
				'Content-Type': 'application/json',
			},
		};
		return axios
			.post(`${urls.fav}`, options)
			.then((res) => res.data)
			.then((data) => {
				return dispatch({
					type: ADD_FAV,
					payload: data,
				});
			});
	};
};

export const removeFav = (id) => {
	return (dispatch) => {
		return axios
			.delete(`${urls.fav}/${id}`)
			.then((res) => res.data)
			.then((data) => {
				return dispatch({
					type: REMOVE_FAV,
					payload: data,
				});
			});
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
