import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

import BusPlan from '../components/BusPlan';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        const {dispatch, busPlan} = this.props;
        return (
            <BusPlan
                dispatch={dispatch}
                busPlan={busPlan}
            />
        );
    }
}

const map = (state) => {
    return {
        busPlan: state.busPlan,
    }
};

export default connect(map)(App);
