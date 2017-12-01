import React from 'react'
import PropTypes from 'prop-types';

import './App.css';
import {occupySeat, selectSeat} from '../actions/seats.actions';
import {finishUser, registerUser} from '../actions/user.actions';
import Register from '../components/register';
import BusPlan from '../components/bus-plan';
import {connect} from 'react-redux';
import {addHistory} from '../actions/histories.actions';
import Histories from '../components/histories';

class App extends React.Component {
    render() {
        const {dispatch, seats, histories, user} = this.props;
        let availableSeats = this.countAvailableSeats();
        // let user = {name: "test", numberOfSeats: 2, selectedSeats: []};
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Seat Reservation</h1>
                </header>
                <div className="App-intro">
                    <h2>{availableSeats <= 0 ? 'NO MORE SEATS!!!' : availableSeats + ' available seats'}</h2>
                    {availableSeats > 0 && user === null
                        ? <Register
                            onRegisterUser={(name, numberOfSeats) => dispatch(registerUser(name, numberOfSeats))}
                            availableSeats={availableSeats}/>
                        : ''}

                    {(user && user.numberOfSeats >= 0 && user.numberOfSeats <= availableSeats)
                        ? <BusPlan seats={seats}
                                   user={user}
                                   allowNumbers={user.numberOfSeats}
                                   onSeatClick={(seat) => dispatch(selectSeat(user, seat))}
                                   onFinishReservation={() => this.finishReservation()}
                                   busDecker={1}
                                   decker={1}/>
                        : ''}
                </div>
                <div className="App-intro">
                    <Histories histories={histories}/>
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
