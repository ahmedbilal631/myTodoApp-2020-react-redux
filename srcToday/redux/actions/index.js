///this is the actions containing file, from here all actions will be exported

//here we will import firebase configs to connect it with db
import myTodoDB from '../../firebase/config';

//types are imported in types variable
import types from './actionsTypes';


// to get load the stored data from database to local redux store state...
export const loadData = ()=>{
    console.log("yes call for load");
    return {
        type: types.loadData
    }
};




//.....................................................
//here by using middleware and firebase database
// we are exporting data to db
export const addTask =(payload)=> async dispatch=>{
    myTodoDB.push({
        payload
    }).then((dispatch({
        type: types.loadData,
        // type: types.addTask,
        // payload
    })))
};
 ////.............................................

//this is the action to add a new task in the list (SADA JEYA KAM)
// export const addTask =(payload)=>{
//     return {
//         type: types.addTask,
//         payload
//     }
// };

//..................................................

//this is the task to delete a task from a given list of tasks (with firebase)
export const delTask =(payload)=>async dispatch=>{
    myTodoDB.child(payload.id).remove().then(dispatch({
        type: types.delTask,
        payload
    }))
};

//..................................................................

//this is the task to delete a task from a given list of tasks (Without firebase)

// export const delTask =(payload)=>{
//     return {
//         type: types.delTask,
//         payload
//     }
// };

//..........................................................

//this is the action to edit an existing task in the list
export const editTask =(payload)=>{
    return {
        type: types.editTask,
        payload
    }
};

//this is the action to sign a task as it is completed or not
export const compTask =(payload)=>{
    return {
        type: types.compTask,
        payload
    }
};
