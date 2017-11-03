import React from 'react'
import PropTypes from 'prop-types';

import './App.css';
import {occupySeat, selectSeat} from '../actions/seats.actions';
import {finishUser, registerUser} from '../actions/user.actions';
import Register from '../components/register';
import BusPlan from '../components/bus-plan';
import {connect} from 'react-redux';
import {addHistory} from '../actions/histories.actions';

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

                    {(user && user.numberOfSeats >= 0 && user.numberOfSeats <= availableSeats)
                        ? <BusPlan seats={seats}
                                   allowNumbers={user.numberOfSeats}
                                   onSeatClick={(seat) => dispatch(selectSeat(user, seat))}/>
                        : ''}

                    {(user && user.numberOfSeats >= 0 && user.numberOfSeats <= availableSeats)
                        ? <button onClick={() => this.finishReservation()}>Finish</button>
                        : ''}
                </div>
                <div className="App-intro">
                    <p>History</p>
                    <ul>
                        {histories.map((entry, index) =>
                            <li key={index}>
                                {index + 1}. {entry.user.name}: {entry.user.selectedSeats.map((seatNo, i) => <span key={i}>Seat {seatNo}</span>)}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }

    finishReservation() {
        this.props.user.selectedSeats.forEach((seatNo) => {
            this.props.dispatch(occupySeat(seatNo));
        });

        this.props.dispatch(addHistory(this.props.user));
        this.props.dispatch(finishUser(this.props.user));
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
        selectedSeats: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
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
            selectedSeats: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        })
    }))
};

const map = (state) => {
    return {
        seats: state.seats,
        user: state.user,
        histories: state.histories
    }
};

export default connect(map)(App);
