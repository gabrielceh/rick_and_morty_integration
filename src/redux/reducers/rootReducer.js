import { combineReducers } from 'redux';

import { favReducer } from './favReducer';
import { charactetReducer } from './charactersReducer';
import { loaderReducer } from './loaderReducer';

const rootReducer = combineReducers({
	favorites: favReducer,
	characters: charactetReducer,
	loader: loaderReducer,
});

export { rootReducer };
