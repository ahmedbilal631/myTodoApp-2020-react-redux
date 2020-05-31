import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';

// import reduxThunk from "redux-thunk";
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;