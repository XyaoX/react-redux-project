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
        case 'AUTH_USER':
        try{
            if(action.payload.response.status === 500){return state;}
        }
        catch(e){
            return {
                person:{username:action.payload.data.username,token:action.payload.data.token},
                isAuthenticated:action.payload.data.isAuthenticated
            }
        }
        break;
        default:
        return state;
    }
}