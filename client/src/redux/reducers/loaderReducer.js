import { LOADER_ON, LOADER_OFF } from '../actions/loadingActions';

export const loaderReducer = (state = false, action) => {
	switch (action.type) {
		case LOADER_ON:
			return (state = true);

		case LOADER_OFF:
			return (state = false);

		default:
			return false;
	}
};
