const initialState = {
    projects: []
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Created project: ', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Error: ', action.error);
            return state;
        case 'DELETE_PROJECT':
            console.log('Project deleted');
            return state;
        case 'DELETE_PROJECT_ERROR':
            console.log('Error: ', action.error);
            return state;
        default:
            return state;
    }
}

export default projectReducer;