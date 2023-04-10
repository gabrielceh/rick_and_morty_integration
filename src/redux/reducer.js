import { ADD_FAV, REMOVE_FAV } from './actions';

const initialStare = {
	myFavorites: [],
};

export const favReducer = (state = initialStare, action) => {
	switch (action.type) {
		case ADD_FAV:
			console.log(action.payload);
			return {
				...state,
				myFavorites: [...state.myFavorites, action.payload],
			};

		case REMOVE_FAV:
			const removed = state.myFavorites.filter(
				(fav) => fav.id !== action.payload
			);

			return {
				...state,
				myFavorites: [...removed],
			};

		default:
			return { ...state };
	}
};
