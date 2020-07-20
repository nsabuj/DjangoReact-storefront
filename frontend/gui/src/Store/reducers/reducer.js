import { combineReducers } from 'redux';

import common from './Index';
import auth from './Auth';

export default combineReducers({
    common,
    auth
});