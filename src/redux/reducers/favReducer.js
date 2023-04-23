import {
	ADD_FAV,
	REMOVE_FAV,
	ORDER_FAV,
	FILTER_FAV,
	GET_FAVS,
} from '../actions/actionsFavorites';

const initialState = {
	allCharactersFav: [],
	myFavorites: [],
};

export const favReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FAVS: {
			return {
				...state,
				myFavorites: [...action.payload],
				allCharactersFav: [...action.payload],
			};
		}

		case ADD_FAV: {
			return {
				...state,
				myFavorites: [...action.payload],
				allCharactersFav: [...action.payload],
			};
		}

		case REMOVE_FAV: {
			return {
				...state,
				allCharactersFav: [...action.payload],
				myFavorites: [...action.payload],
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
