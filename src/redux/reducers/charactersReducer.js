import {
	GET_CHARACTERS,
	ADD_CHARACTER_BY_ID,
	REMOVE_CHARACTER,
} from '../actions/actionCharacters';

const intitalState = {
	data: [],
	error: '',
};

export const charactetReducer = (state = intitalState, action) => {
	switch (action.type) {
		case GET_CHARACTERS:
			return {
				error: '',
				data: [...state.data],
			};

		case ADD_CHARACTER_BY_ID:
			if (action.payload.error) {
				return {
					error: action.payload.error,
					data: [...state.data],
				};
			}
			const findCharacterById = state.data.find(
				(character) => character.id === action.payload.data.id
			);

			if (findCharacterById)
				return {
					error: 'Id in list',
					data: [...state.data],
				};

			return {
				error: '',
				data: [action.payload.data, ...state.data],
			};

		case REMOVE_CHARACTER:
			const findCharacter = state.data.find(
				(character) => character.id === action.payload
			);

			if (!findCharacter)
				return {
					error: 'Id not found',
					data: [...state.data],
				};

			const characterFilter = state.data.filter(
				(character) => character.id !== action.payload
			);
			return {
				error: '',
				data: [...characterFilter],
			};

		default:
			return {
				error: '',
				data: [...state.data],
			};
	}
};
