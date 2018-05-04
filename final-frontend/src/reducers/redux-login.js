const loginInitialState = {
    person:{
        username:'Eric',
        token:''
    },
    isAuthenticated:true
};




export default (state = loginInitialState,action)=> {
    switch(action.type){
        default:
        return state;
    }
}