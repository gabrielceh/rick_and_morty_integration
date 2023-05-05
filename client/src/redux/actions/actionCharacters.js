import axios from 'axios';
import { urls } from '../../helpers/URL';
import { loaderOff, loaderOn } from './loadingActions';

export const GET_CHARACTERS = 'GET_ALL_CHARACTERS';
export const ADD_CHARACTER_BY_ID = 'ADD_CHARACTER_BY_ID';
export const REMOVE_CHARACTER = 'REMOVECHARACTER';
export const RESTART_CHARACTER = 'RESTART_CHARACTER';

export const getCharacters = () => {
	return {
		type: GET_CHARACTERS,
	};
};

export const addCharacterById = (id) => {
	return async function (dispatch) {
		dispatch(loaderOn());
		try {
			const { data } = await axios(`${urls.baseURL}/${id}`);

			dispatch({
				type: ADD_CHARACTER_BY_ID,
				payload: { error: null, data },
			});
		} catch (error) {
			console.log(error);
			dispatch({
				type: ADD_CHARACTER_BY_ID,
				payload: { error: error.response.data.error, data: {} },
			});
		} finally {
			dispatch(loaderOff());
		}
	};
};

export const removeCharacter = (id) => {
	return {
		type: REMOVE_CHARACTER,
		payload: id,
	};
};

export const restartCharacter = () => {
	return {
		type: RESTART_CHARACTER,
	};
};
