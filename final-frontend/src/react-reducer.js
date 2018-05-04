import { createStore, combineReducers } from 'redux';



// ADD_NOTES
// EDIT NOTES
// DELETE NOTES 

const loginReducer = (state = [],action)=> {
    switch(action.type){
        default:
        return state;
    }
}

const loginAction = ({id,password,token})=>({
    type:'LOGIN',
    login:{
        id,
        password,
        token
    }
})


const store = createStore(
    combineReducers({
        login:loginReducer,
        register:registerReducer
    })
);

console.log(store.getState())

const initialState = {
    login:{
        id:'',
        password:'',
        token:''
    },
    register:{
        id:'',
        password:''
    }
}