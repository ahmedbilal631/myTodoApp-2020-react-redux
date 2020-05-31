import {combineReducers} from 'redux';
const initialState =[{
    text: ''
}]
const modify = (state= initialState, action)=>{
    switch (action.type) {
        case 'ADD_NOW':
            console.log('yes', action.payload);
            return [...state, {
                text: action.payload.text
            }]
        default:
            return state
    }
}



const rootReducer = combineReducers({
    modify
});
export default rootReducer;