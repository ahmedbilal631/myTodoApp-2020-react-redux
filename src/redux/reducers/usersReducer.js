//here we will again import the actions type file again
import types from '../actions/actionsTypes';

//reducer starts here
export default (state=[], action)=>{
    switch(action.type){
        case types.addUser:
            console.log('yes Add call');
            return state=[
                ...state,
                
                  // id: Math.floor(Math.random() * 1000),
                //   completed: false,
                 action.payload.text,
                ];
        case types.loadData:
          console.log(" data is loading," + state);
          return state;
        default:
            return state;
            }}