const loginInitialState = {
    person:{
        username:'',
        token:''
    },
    isAuthenticated:false
};




export default (state = loginInitialState,action)=> {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                person:{...action.person},
                isAuthenticated:action.isAuthenticated
            }
        case 'LOGIN_FAIL':
            return loginInitialState; 
        default:
        return state;
    }
}