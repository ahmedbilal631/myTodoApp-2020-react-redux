//here we will again import the actions type file again
import types from '../actions/UserAction/actionsTypes';

import Dummy_Profile from '../../media/dummy_profile.jpg';
//here a dumy id data for testing
const dumyId = {
  user_id: 'xyz123',
  name : 'Sultan',
  fname: 'Wada Sultan',
  gender:'male',
  cnic: '30302020920904',
  email: 'xyz123@gmail.com',
  number:'030008887689',
  address:'asda fgfh jknkjo ads',
  country:'Turkey',
  password:'xyxyxyxyxyyxyx',
  dp_image: Dummy_Profile,
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
        case types.updateUser:
          console.log('update user from reducer', action.payload);
          let _id = action.payload.id;
          // const index = state.findIndex((item)=>{return item.user_id === _id});
          state = state.filter((item)=> item.id != _id);
          state.push(action.payload);
          console.log('after update', state); 
          return state;
        case types.loadData:
          console.log(" data is loading," + state);
          return state;
        default:
            return state;
            }}