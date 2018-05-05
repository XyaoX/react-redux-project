export const loginSuccessAction = ({username,token, isAuthenticated})=>({
    type:'LOGIN_SUCCESS',
    person:{
        username,
        token
    },
    isAuthenticated
})

export const loginFailAction = () => ({
    type:'LOGIN_FAIL'
})
