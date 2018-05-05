import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routes/AppRouter';
import './index.css';
import { Provider } from 'react-redux';
import setAuthorizationToken from './authHeader';


const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

setAuthorizationToken(localStorage.jwtToken);


const render =() => {
    ReactDom.render(jsx,document.getElementById('root'));
}
store.subscribe(render);
render();
registerServiceWorker();