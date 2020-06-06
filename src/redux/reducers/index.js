import {combineReducers} from 'redux';

//here we will import all kinds of reducers first
import UsersReducer from './usersReducer';

//here the root reducer will combine all the reducers and then export the root.....
const rootReducer = combineReducers({users: UsersReducer});
export default rootReducer;