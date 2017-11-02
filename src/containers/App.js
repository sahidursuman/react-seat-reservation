import React from 'react'
import PropTypes from 'prop-types';

import './App.css';
import {selectSeat} from '../actions/seat.actions';
import {finishUser, registerUser} from '../actions/user.actions';
import Register from '../components/register';
import BusPlan from '../components/bus-plan';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        const {dispatch, user, seats, histories} = this.props;
        let availableSeats = this.countAvailableSeats();
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Seat Reservation</h1>
                </header>
                <div className="App-intro">
                    <p>{availableSeats} available seats</p>
                    <p>{availableSeats <= 0 ? 'NO MORE SEATS!!!' : ''}</p>
                    {availableSeats > 0
                        ? <Register
                            onRegisterUser={(name, numberOfSeats) => dispatch(registerUser(name, numberOfSeats))}/>
                        : ''}

                    {(user && user.numberOfSeats > 0 && user.numberOfSeats <= availableSeats)
                        ? <BusPlan seats={seats}
                                   allowNumbers={user.numberOfSeats}
                                   onSeatClick={(seat) => dispatch(selectSeat(user, seat))}/>
                        : ''}

                    {(user && user.numberOfSeats > 0 && user.numberOfSeats <= availableSeats)
                        ? <button onClick={dispatch(finishUser(user))}>Finish</button>
                        : ''}
                </div>
                <div className="App-intro">
                    <p>History</p>
                    <ul>
                        {histories.map((entry, index) =>
                            <li key={index}>
                                {index + 1}. {entry.user.name}: {entry.seats.length} Seats
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }

    countAvailableSeats() {
        let count = 0;
        this.props.seats.forEach((seat) => {
            if (!seat.occupied) {
                count++;
            }
        });
        return count;
    }
}

App.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        numberOfSeats: PropTypes.number.isRequired,
        selectedSeats: PropTypes.arrayOf(PropTypes.shape({
            occupied: PropTypes.bool.isRequired,
            selected: PropTypes.bool,
            seatNo: PropTypes.string.isRequired
        }).isRequired).isRequired
    }),
    seats: PropTypes.arrayOf(PropTypes.shape({
        occupied: PropTypes.bool.isRequired,
        selected: PropTypes.bool,
        seatNo: PropTypes.string.isRequired
    }).isRequired),
    histories: PropTypes.arrayOf(PropTypes.shape({
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
            numberOfSeats: PropTypes.number.isRequired,
            selectedSeats: PropTypes.arrayOf(PropTypes.shape({
                occupied: PropTypes.bool.isRequired,
                selected: PropTypes.bool,
                seatNo: PropTypes.string.isRequired
            }).isRequired).isRequired
        })
    }))
};


function initSeat(number) {
    let arr = [];
    for (let i = 0; i < number; i++) {
        arr[i] = {
            seatNo: i + 1,
            occupied: false,
            selected: false
        };
    }
    return arr;
}

function select() {
    return {
        seats: initSeat(20)
    }
}

export default connect(select)(App);
