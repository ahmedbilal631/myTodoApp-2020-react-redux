//this is my actions file

export const addTask= (task)=>{
    return {
        type: 'ADD_TASK',
        payload: task
    }
};
 
export const deleteTask =(taskId)=>{
    return {
        type: 'DELETE_TASK',
        payload: taskId
    }
};

export const editTask =(taskId)=>{
    return {
        type: 'EDIT_TASK',
        payload: taskId
    }
};
export const completedTask =(taskId)=>{
    return {
        type: 'COMPLETED_TASK',
        payload: taskId
    }
};
