import {SELECT_SEAT} from '../actions/seat.actions';

function seats(state = [], action) {
    switch (action.type) {
        case SELECT_SEAT:
            return state.map((seat) => {
                if (seat.seatNo === action.seat.seatNo) {

                    return Object.assign({}, seat, {
                        selected: !seat.selected
                    })
                }
                return seat;
            });
        default:
            return state;
    }
}

export default seats;