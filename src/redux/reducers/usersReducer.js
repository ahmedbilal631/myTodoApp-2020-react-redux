//here we will again import the actions type file again
import types from '../actions/actionsTypes';

import Dummy_Profile from '../../media/dummy_profile.jpg';
//here a dumy id data for testing
const dumyId = {
  name: 'Max Well',
  country: 'USA',
  email: 'maxwell123@gmail.com',
  number: '+1-20023903478',
  // profile_image: '../../media/dummy_profile.jpg',
  profile_image: Dummy_Profile,
  password: '123xyz'
}

//reducer starts here
export default (state=[dumyId], action)=>{
    switch(action.type){
        case types.addUser:
            console.log('yes Add call');
            return state=[
                ...state,
                
                  // id: Math.floor(Math.random() * 1000),
                //   completed: false,
                 action.payload,
                ];
        case types.loadData:
          console.log(" data is loading," + state);
          return state;
        default:
            return state;
            }}