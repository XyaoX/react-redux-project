import { createStore, combineReducers } from 'redux'; 
import loginReducer from '../reducers/redux-login';
const REDUX_DEV = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export default () => {
    // Store creation
    const store = createStore(
        combineReducers({
            login:loginReducer
        }),REDUX_DEV
    )
 return store;
}

