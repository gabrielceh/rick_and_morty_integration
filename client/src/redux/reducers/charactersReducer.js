import {
	GET_CHARACTERS,
	ADD_CHARACTER_BY_ID,
	REMOVE_CHARACTER,
} from '../actions/actionCharacters';

const intitalState = {
	data: [],
	error: null,
};

export const charactetReducer = (state = intitalState, action) => {
	switch (action.type) {
		case GET_CHARACTERS:
			return {
				error: null,
				data: [...state.data],
			};

		case ADD_CHARACTER_BY_ID:
			if (action.payload.error) {
				console.log(action.payload.error);
				return {
					...state,
					error: action.payload.error,
				};
			}

			const findCharacterById = state.data.find(
				(character) => character.id === action.payload.data.id
			);

			if (findCharacterById) {
				return {
					...state,
					error: `Id ${findCharacterById.id} in list`,
				};
			}

			return {
				error: null,
				data: [action.payload.data, ...state.data],
			};

		case REMOVE_CHARACTER:
			const charactersFiltered = state.data.filter(
				(character) => character.id !== action.payload
			);

			if (charactersFiltered.length === state.data.length)
				return {
					error: 'Id not found',
					data: [...state.data],
				};

			return {
				error: null,
				data: [...charactersFiltered],
			};

		default:
			return {
				...state,
			};
	}
};
