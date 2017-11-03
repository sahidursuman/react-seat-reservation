import {ADD_HISTORY} from '../actions/histories.actions';

function histories(state = [], action) {
    switch (action.type) {
        case ADD_HISTORY:
            return [
                ...state,
                {
                    user: action.user
                }
            ];
        default:
            return state;
    }
}

export default histories;