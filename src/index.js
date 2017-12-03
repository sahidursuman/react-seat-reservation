import React from 'react';
import App from './containers/App';
import appReducers from './reducers/AppReducers';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import {render} from 'react-dom'
import initialState from './initialState';

let store = createStore(appReducers, initialState);
store.subscribe(() =>
    console.log(store.getState())
);
console.log(store.getState());
let rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);


