//here we will again import the actions type file again
import types from '../actions/actionsTypes';

//reducer starts here
export default (state=[], action)=>{
    switch(action.type){
        case types.addUser:
            console.log('yes Add call');
            return state=[
                ...state,
                {
                  // id: Math.floor(Math.random() * 1000),
                //   completed: false,
                  text: action.payload.text,
                }];
                console.log('after add statee', state);
        default:
            return state;
            }}