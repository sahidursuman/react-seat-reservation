import {combineReducers} from 'redux';
import busPlanReducer from './BusPlanReducer.js'

const appReducers = combineReducers({
    busPlan: busPlanReducer,
});

export default appReducers