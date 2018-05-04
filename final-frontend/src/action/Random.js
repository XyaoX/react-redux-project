import React from 'react';
import ReactDom from 'react-dom'; 
import App from '../App';
import registerServiceWorker from '../registerServiceWorker';
import { createStore } from 'redux'; 
const REDUX_DEV = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialState = {
    count:0
};

const counter = (state,action) =>{
    if (state === undefined) {
        return initialState;
    }

    switch (action.type){
        case 'INCREMENT':
            return {
                count :state.count +1
            }
        case 'DECREMENT':
            return {
                count : state.count -1
            }
        default:
        return state; 
    }
}

const store = createStore(counter,REDUX_DEV);

const render =() => {
    ReactDOM.render(
        <App
            count ={store.getState().count}
            increment={()=>{
                store.dispatch({type:'INCREMENT'})
            }}
            decrement ={()=>{
                store.dispatch({type:'DECREMENT'})
            }}
            />,document.getElementById('root')
    )
}
store.subscribe(render);
render();

registerServiceWorker();
    