///this is the actions containing file, from here all actions will be exported


//types are imported in types variable
import types from './actionsTypes';






//.....................................................
//here by using middleware and firebase database
// we are exporting data to db
// export const addTask =(payload)=> async dispatch=>{
//     myTodoDB.push({
//         payload
//     }).then((dispatch({
//         type: types.loadData,
//         // type: types.addTask,
//         // payload
//     })))
// };
 ////.............................................

//this is the action to add a new task in the list (SADA JEYA KAM)
export const addUser =(payload)=>{
    return {
        type: types.addUser,
        payload
    }
};

//..................................................

// to get load the stored data from database to local redux store state...
export const loadData = ()=>{
    console.log("yes call for load");
    return {
        type: types.loadData
    }
};