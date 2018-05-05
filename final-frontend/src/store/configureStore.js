import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import loginReducer from '../reducers/redux-login';
import weatherReducer from '../reducers/reducer_weather';
import promiseMiddleware from 'redux-promise';
const REDUX_DEV = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export default () => {

    // promisemiddleware basically turns promise into value inside the payload

    // Store creation
    const store = createStore(
        combineReducers({
            login:loginReducer,
            weather:weatherReducer
        }),REDUX_DEV,applyMiddleware(promiseMiddleware)
    )
 return store;
}

