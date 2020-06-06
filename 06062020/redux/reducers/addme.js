import Types from '../actions/types';
// import addMe from '../actions/actions';

const AddmeReducer= (state= [], action)=>{
    switch(action.type){
        case Types.addme:
            console.log('yes, its add me call. from reduce', state);
            return state = [...state, action.payload.name]; 
        case Types.deleteme:
            console.log('yes Its delete me call.');
        default:
            return state;
                       
    }
}
export default AddmeReducer