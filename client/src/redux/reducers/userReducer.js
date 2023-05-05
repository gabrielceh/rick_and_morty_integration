import { LOGIN, LOGOUT, REGISTER } from '../actions/actionUser';

const initialState = {
	access: false,
	error: null,
	user: null,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...action.payload,
			};

		case LOGOUT:
			return {
				...initialState,
			};

		case REGISTER:
			return {
				...action.payload,
			};

		default:
			return state;
	}
};
