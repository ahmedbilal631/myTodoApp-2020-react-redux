///this is the actions containing file, from here all actions will be exported

//types are imported in types variable
import types from './actionsTypes';



//this is the action to add a new task in the list
export const addTask =(payload)=>{
    return {
        type: types.addTask,
        payload
    }
};

//this is the task to delete a task from a given list of tasks
export const delTask =(payload)=>{
    return {
        type: types.delTask,
        payload
    }
};

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
