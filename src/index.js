import React from 'react';
import './index.css';
import App from './containers/App';
import appReducers from './reducers/app.reducers';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import {render} from 'react-dom'


function initSeat(number) {
    let arr = [];
    for (let i = 0; i < number; i++) {
        arr[i] = {
            seatNo: i + 1 + '',
            occupied: false,
            selected: false
        };
    }
    return arr;
}

let store = createStore(appReducers, {
        seats: initSeat(20),
        histories: [],
        user: null
    }
);
store.subscribe(() =>
    console.log(store.getState())
);
console.log(store.getState());
let rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);


