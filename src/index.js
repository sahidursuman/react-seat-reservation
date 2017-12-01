import React from 'react';
import './index.css';
import App from './containers/App';
import appReducers from './reducers/app.reducers';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import {render} from 'react-dom'


function initSeat() {

    let seats = [
            {
                seatNo: '1A',
                category: 1
            }, {
                seatNo: '1B',
                category: 1
            }, {
                seatNo: '1C',
                category: 1
            }, {
                seatNo: '1D',
                category: 1
            }, {
                seatNo: '5A',
                category: 2
            }, {
                seatNo: '5B',
                category: 2
            }, {
                seatNo: '5C',
                category: 2
            }, {
                seatNo: '5D',
                category: 2
            }, {
                seatNo: '6A',
                category: 2
            }, {
                seatNo: '6B',
                category: 2
            }, {
                seatNo: '6C',
                category: 2
            }, {
                seatNo: '6D',
                category: 2
            }, {
                seatNo: '7A',
                category: 2
            }, {
                seatNo: '7B',
                category: 2
            }, {
                seatNo: '7C',
                category: 2
            },
            {
                seatNo: '7D',
                category: 2
            },
            {
                seatNo: '15C',
                category: 2
            },
            {
                seatNo: '15D',
                category: 2
            },
            {
                seatNo: '20A',
                category: 2
            },
            {
                seatNo: '20B',
                category: 2
            },
            {
                seatNo: '20C',
                category: 2
            },
            {
                seatNo: '20D',
                category: 2
            },
            {
                seatNo: '22A',
                category: 3
            },
            {
                seatNo: '22B',
                category: 3
            },
            {
                seatNo: '22C',
                category: 3
            },
            {
                seatNo: '22D',
                category: 3
            },
            {
                seatNo: '23A',
                category: 3
            },
            {
                seatNo: '23B',
                category: 3
            },
            {
                seatNo: '23C',
                category: 3
            },
            {
                seatNo: '23D',
                category: 3
            }
        ]
    ;

    seats.forEach(function (seat) {
        Object.assign(seat, {
            occupied: false,
            selected: false
        });
    });

    return seats;
}

let store = createStore(appReducers, {
        seats: initSeat(),
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
        <App/>
    </Provider>,
    rootElement
);


