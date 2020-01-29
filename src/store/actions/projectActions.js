export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // async call
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Ana',
            authorLastName: 'Henricks',
            authorId: 101,
            createdAt: new Date()
        })
        .then(() => {
            dispatch({
                type: 'CREATE_PROJECT',
                project
            })
        })
        .catch((error) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error })
        })
    }
}