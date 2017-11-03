import {FINISH_USER, REGISTER_USER} from '../actions/user.actions';

function user(state = null, action) {
    switch (action.type) {
        case REGISTER_USER:
            return Object.assign({}, state, {
                name: action.name,
                numberOfSeats: +action.numberOfSeats,
                selectedSeats: []
            });
        case FINISH_USER:
            return null;
        default:
            return state;
    }
}

export default user;