import {combineReducers} from 'redux';
import seats from './seats.reducers';
import user from './user.reducers';
import histories from './histories.reducers';

const appReducers = combineReducers({
    seats,
    user,
    histories
});

export default appReducers