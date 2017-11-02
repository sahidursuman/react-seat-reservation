import React from 'react';
import './index.css';
import App from './containers/App';
import appReducers from './reducers/app.reducers';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import { render } from 'react-dom'

let store = createStore(appReducers);

let rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <App/>,
    </Provider>,
    rootElement
);


