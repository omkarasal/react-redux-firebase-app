const initialState = {
    projects: [
        { id: 1, title: 'Project Title', content: 'Lorem ipsum' },
        { id: 2, title: 'Project Title', content: 'Lorem ipsum' },
        { id: 3, title: 'Project Title', content: 'Lorem ipsum' }
    ]
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Created project: ', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Error: ', action.error)
            return state;
        default:
            return state;
    }
}

export default projectReducer;