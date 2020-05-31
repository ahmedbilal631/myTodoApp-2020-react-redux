//store file
import {createStore, applyMiddleware, compose} from 'redux';

//importing thunk here
import thunk from 'redux-thunk';
//importing redux-firebase and redux-firestore
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';

//importing firebase configurations file here
import fbConfig from '../config/fbConfig';
import firebase from 'firebase/app';

import rootReducer from './reducers/index';

const store = createStore(rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reactReduxFirebase(fbConfig), // redux binding for firebase
      reduxFirestore(fbConfig) // redux bindings for firestore
    )
  );
export default store;