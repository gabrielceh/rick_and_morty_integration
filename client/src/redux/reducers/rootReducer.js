import { combineReducers } from 'redux';

import { favReducer } from './favReducer';
import { charactetReducer } from './charactersReducer';
import { loaderReducer } from './loaderReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
	favorites: favReducer,
	characters: charactetReducer,
	loader: loaderReducer,
	user: userReducer,
});

export { rootReducer };
