import { act } from 'react-dom/test-utils';
import {
	ADD_FAV,
	REMOVE_FAV,
	ORDER_FAV,
	FILTER_FAV,
} from '../actions/actionsFavorites';

const initialState = {
	allCharacters: [],
	myFavorites: [],
};

export const favReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAV: {
			return {
				...state,
				myFavorites: [action.payload, ...state.allCharacters],
				allCharacters: [action.payload, ...state.allCharacters],
			};
		}

		case REMOVE_FAV: {
			const removed = state.allCharacters.filter(
				(fav) => fav.id !== action.payload
			);
			return {
				...state,
				allCharacters: [...removed],
			};
		}

		case FILTER_FAV: {
			const copyAllcharFilter = [...state.allCharacters];
			if (action.payload === 'all') {
				return {
					...state,
					myFavorites: [...state.allCharacters],
				};
			}
			const filter = copyAllcharFilter.filter(
				(character) => character?.gender === action.payload
			);
			return {
				...state,
				myFavorites: [...filter],
			};
		}

		case ORDER_FAV: {
			const copyAllCharOrder = [...state.allCharacters];

			if (action.payload === 'A') {
				copyAllCharOrder.sort(function (a, b) {
					return parseInt(a?.id) - parseInt(b?.id);
				});
			} else if (action.payload === 'D') {
				copyAllCharOrder.sort(function (a, b) {
					return parseInt(b?.id) - parseInt(a?.id);
				});
			} else {
				return { ...state };
			}
			return {
				...state,
				myFavorites: [...copyAllCharOrder],
			};
		}

		default:
			return { ...state };
	}
};
