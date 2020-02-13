//this is my reducers file

import { combineReducers } from 'redux';


const taskReducer=(state=[], action)=>{

    switch(action.type){
        case "ADD_TASK":
            console.log(action)
            state = [...state,action.payload];
            console.log(state)
            break
        case 'DELETE_TASK':
            // console.log('payload' , action.payload);
            const newState = state.filter(todo => {
                return todo.id !== action.payload.taskId
              });
              state = newState;
              console.log('new state', newState);
              return state
        case 'EDIT_TASK':
            // console.log('Edit call arrived', action.payload);
            const index = state.findIndex((item)=>{return item.id === action.payload.taskId}); 
            // console.log('index', index);
            let tempState= state.slice(0, index);
            let tempStateX = state.splice(index, index+1, action.payload);
            state = tempState.concat(tempStateX);
            console.log("after update", state);
            return state;
            //   break
        case 'COMPLETED_TASK':
            console.log("completed call arrived");
            return state.map(todo =>
                todo.id === action.payload.taskId ?
                  {
                    ...todo,
                    status: !todo.status,
                  } :
                  todo
              );
        }
        return state;
};

const rootReducer = combineReducers({taskReducer});
export default rootReducer;