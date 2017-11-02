import {FINISH_USER, REGISTER_USER} from '../actions/user.actions';

function users(state = {}, action) {
    switch (action.type) {
        case REGISTER_USER:
            return Object.assign({}, state, {
                user: {
                    name: action.name,
                    numberOfSeats: action.numberOfSeats,
                    selectedSeats: []
                }
            });
        case FINISH_USER:
            // occupy selected seats
            action.user.selectedSeats.forEach((selectedSeat) => {
                state.map((seat) => {
                    if (seat.seatNo === selectedSeat.seatNo) {
                        return Object.assign({}, seat, {
                            occupied: true
                        })
                    }
                    return seat;
                });
            });

            // add history
            state.histories.push(action.user);

            // release current user
            return Object.assign({}, state, {
                user: 'undefined'
            });
        default:
            return state;
    }
}

export default users;