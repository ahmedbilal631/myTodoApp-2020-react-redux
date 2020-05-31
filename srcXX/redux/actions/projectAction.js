//project action file is here

//here the actions will return a functions as a middleware by using thunk

export const createProject=(project)=>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        //asyc function to connect database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authFirstName: 'Saif',
            authLastName: 'Amervi',
            authId: 786,
            createdAt: new Date()
        }).then(()=>{
            // console.log(project);
            dispatch({
                type: 'CREATE_PROJECT',
                project
            })
        }).catch((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
    }
}