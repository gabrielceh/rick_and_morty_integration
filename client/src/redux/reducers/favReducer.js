import {
	ADD_FAV,
	REMOVE_FAV,
	ORDER_FAV,
	FILTER_FAV,
	GET_FAVS,
	RESTART_FAV,
} from '../actions/actionsFavorites';

const initialState = {
	allCharactersFav: [],
	myFavorites: [],
	error: null,
};

export const favReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FAVS: {
			return {
				...state,
				myFavorites: [...action.payload.data],
				allCharactersFav: [...action.payload.data],
				error: null,
			};
		}

		case ADD_FAV: {
			if (action.payload.error) {
				return {
					...state,
					error: action.payload.error,
				};
			}
			return {
				...state,
				myFavorites: [...action.payload.data],
				allCharactersFav: [...action.payload.data],
				error: null,
			};
		}

		case REMOVE_FAV: {
			if (action.payload.error) {
				return {
					...state,
					error: action.payload.error,
				};
			}
			return {
				...state,
				allCharactersFav: [...action.payload.data],
				myFavorites: [...action.payload.data],
				error: null,
			};
		}

		case FILTER_FAV: {
			const copyAllcharFilter = [...state.allCharactersFav];
			if (action.payload === 'all') {
				return {
					...state,
					myFavorites: [...state.allCharactersFav],
					error: null,
				};
			}
			const filter = copyAllcharFilter.filter((character) => character?.gender === action.payload);
			return {
				...state,
				myFavorites: filter,
				error: null,
			};
		}

		case ORDER_FAV: {
			const copyAllCharOrder = [...state.allCharactersFav];
			if (action.payload !== 'A' && action.payload !== 'D') {
				return { ...state };
			}

			return {
				...state,
				error: null,
				myFavorites:
					action.payload === 'A'
						? copyAllCharOrder.sort((a, b) => parseInt(a?.id) - parseInt(b?.id))
						: copyAllCharOrder.sort((a, b) => parseInt(b?.id) - parseInt(a?.id)),
			};
		}

		case RESTART_FAV: {
			return {
				...initialState,
			};
		}

		default:
			return { ...state };
	}
};
