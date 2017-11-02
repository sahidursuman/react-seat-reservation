import {combineReducers} from 'redux';
import seats from './seat.reducers';
import users from './user.reducers';

const appReducers = combineReducers({
    seats,
    users
});

export default appReducers