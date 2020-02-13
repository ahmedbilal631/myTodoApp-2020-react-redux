import {combineReducers} from 'redux';

//here we will import all kinds of reducers first
import todoManipulations from './todoManipulations'

//here the root reducer will combine all the reducers and then export the root.....
const rootReducer = combineReducers({todoManipulations});
export default rootReducer;