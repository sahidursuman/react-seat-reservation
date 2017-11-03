import {OCCUPY_SEAT, SELECT_SEAT} from '../actions/seats.actions';

function seats(state = [], action) {
    switch (action.type) {
        case SELECT_SEAT:
            if (action.seat.selected && action.user.numberOfSeats >= 0) {
                Object.assign({}, state, {
                    user: {
                        numberOfSeats: action.user.numberOfSeats++
                    }
                })
            } else if (!action.seat.selected && action.user.numberOfSeats > 0) {
                Object.assign({}, state, {
                    user: {
                        numberOfSeats: action.user.numberOfSeats--
                    }
                })
            } else {
                return state;
            }
            return state.map((seat) => {
                if (seat.seatNo === action.seat.seatNo) {
                    let selectedSeats = action.user.selectedSeats;
                    let index = selectedSeats.indexOf(seat.seatNo);
                    if (index !== -1) {
                        selectedSeats.splice(index, 1);
                    } else {
                        selectedSeats.push(seat.seatNo);
                    }
                    Object.assign({}, state, {
                        user: {
                            selectedSeats: selectedSeats.sort(function(a, b) {
                                return a - b;
                            })
                        }
                    });

                    return Object.assign({}, seat, {
                        selected: !seat.selected
                    })
                }
                return seat;
            });
        case OCCUPY_SEAT:
            // occupy selected seats
            return state.map((seat) => {
                if (seat.seatNo === action.seatNo) {
                    return Object.assign({}, seat, {
                        occupied: true
                    });
                }
                return seat;
            });
        default:
            return state;
    }
}

export default seats;