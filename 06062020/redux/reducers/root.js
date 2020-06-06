///these are my combined reducers
import {combinrdReducers, combineReducers} from 'redux';

import Addme from './addme';

const rootReducer = combineReducers({Addme});

export default rootReducer;