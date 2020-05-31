
import { todosRef } from "../../firebase/fbConfig";


export const modifyAction =(payload)=>async disptach=>{
    todosRef.push().set(payload).then(disptach({
        type: 'ADD_NOW',
        payload
    }));
};
// export const modifyAction =(payload)=>{

//     return  async dispatch=>{
//         todosRef.push().set(payload);
//     }
    
    
//     {
//         type: 'ADD_NOW',
//         payload
//     }

// };