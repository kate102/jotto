// KM Creates the root reducer?

import { combineReducers } from 'redux';
import success from './successReducer';

export default combineReducers({
    success,
});