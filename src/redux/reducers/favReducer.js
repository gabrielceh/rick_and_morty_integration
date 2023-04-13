import {
	ADD_FAV,
	REMOVE_FAV,
	ORDER_FAV,
	FILTER_FAV,
} from '../actions/actionsFavorites';

const initialState = {
	allCharactersFav: [],
	myFavorites: [],
};

export const favReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAV: {
			return {
				...state,
				myFavorites: [action.payload, ...state.allCharactersFav],
				allCharactersFav: [action.payload, ...state.allCharactersFav],
			};
		}

		case REMOVE_FAV: {
			const removed = state.allCharactersFav.filter(
				(fav) => fav.id !== action.payload
			);
			return {
				...state,
				allCharactersFav: [...removed],
				myFavorites: [...removed],
			};
		}

		case FILTER_FAV: {
			const copyAllcharFilter = [...state.allCharactersFav];
			if (action.payload === 'all') {
				return {
					...state,
					myFavorites: [...state.allCharactersFav],
				};
			}
			const filter = copyAllcharFilter.filter(
				(character) => character?.gender === action.payload
			);
			return {
				...state,
				myFavorites: filter,
			};
		}

		case ORDER_FAV: {
			const copyAllCharOrder = [...state.allCharactersFav];
			if (action.payload !== 'A' && action.payload !== 'D') {
				return { ...state };
			}

			return {
				...state,
				myFavorites:
					action.payload === 'A'
						? copyAllCharOrder.sort((a, b) => parseInt(a?.id) - parseInt(b?.id))
						: copyAllCharOrder.sort(
								(a, b) => parseInt(b?.id) - parseInt(a?.id)
						  ),
			};
		}

		default:
			return { ...state };
	}
};
