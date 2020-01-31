const initialState = {
    authError: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('Error')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success')
            return {
                ...state,
                authError: ''
            }
        case 'SIGN_OUT':
            console.log('Logout')
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('Signup success')
            return {
                ...state,
                authError: ''
            }
        case 'SIGNUP_ERROR':
            console.log('Signup error')
            return {
                ...state,
                authError: action.error.message
            }
        default:
            return state;
    }
}

export default authReducer;