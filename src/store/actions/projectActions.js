import * as actionTypes from './actionTypes';

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // async call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        })
        .then(() => {
            dispatch({
                type: actionTypes.CREATE_PROJECT,
                project
            })
        })
        .catch((error) => {
            dispatch({ type: actionTypes.CREATE_PROJECT_ERROR, error })
        })
    }
}

export const deleteProject = (projectId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // async call
        const firestore = getFirestore();
        firestore.collection('projects').doc(projectId).delete()
        .then(() => {
            dispatch({
                type: actionTypes.DELETE_PROJECT
            })
        })
        .catch((error) => {
            dispatch({ type: actionTypes.DELETE_PROJECT_ERROR, error })
        })
    }
}