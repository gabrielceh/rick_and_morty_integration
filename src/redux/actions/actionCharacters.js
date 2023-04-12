import axios from 'axios';
import { urls } from '../../helpers/URL';
import { loaderOff, loaderOn } from '../actions/loadingActions';

export const GET_CHARACTERS = 'GET_ALL_CHARACTERS';
export const ADD_CHARACTER_BY_ID = 'ADD_CHARACTER_BY_ID';
export const REMOVE_CHARACTER = 'REMOVECHARACTER';

export const getCharacters = () => {
	return {
		type: GET_CHARACTERS,
	};
};

export const addCharacterById = (id) => {
	return function (dispatch) {
		loaderOn();
		return axios(`${urls.baseURL}/${id}?key=${urls.key}`)
			.then(({ data }) => {
				dispatch({
					type: ADD_CHARACTER_BY_ID,
					payload: { error: '', data },
				});
			})
			.catch((error) => {
				dispatch({
					type: ADD_CHARACTER_BY_ID,
					payload: { error, data: {} },
				});
			})
			.finally(() => {
				loaderOff();
			});
	};
};

export const removeCharacter = (id) => {
	return {
		type: REMOVE_CHARACTER,
		payload: id,
	};
};
