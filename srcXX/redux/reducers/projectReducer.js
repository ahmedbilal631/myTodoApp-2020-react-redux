//project reducer file

const initState = {
    projects: [
        {id: 1, title: 'My Title_1', content:'My content is here'},
        {id: 2, title: 'My Title_2', content:'My content is here'},
        {id: 3, title: 'My Title_3', content:'My content is here'}
    ]
};
const projectReducer = (state= initState, action)=>{
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log("project Created", action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('A create project error occurrs here', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;