import {createStore} from 'redux';

//import root reducer here
import rootReducer from './reducers';

//here the store will be exported with given reducers
const store = createStore(rootReducer);
export default store;