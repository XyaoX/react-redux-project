export const loginSuccessAction = ({username,token})=>({
    type:'LOGIN',
    login:{
        username,
        token
    }
})
