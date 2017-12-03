import React, {Component} from 'react';
import PropTypes from 'prop-types';
import dispatcher from '../dispatchers/dispatcher';
import SeatView from './views/SeatView';

export default class Seat extends Component {
    constructor() {
        super();
        this.onSeatClick = this.onSeatClick.bind(this);
    }

    onSeatClick() {
        const {dispatch, seat} = this.props;
        dispatcher.selectSeat(dispatch, seat);
    }

    render() {
        const {seat, hasIndex} = this.props;
        return (
            <SeatView
                hasIndex={hasIndex}
                seat={seat}
                onSeatClick={this.onSeatClick}
            />
        );
    }
}

Seat.propTypes = {
    seat: PropTypes.shape({
        occupied: PropTypes.bool.isRequired,
        selected: PropTypes.bool.isRequired,
        seatNo: PropTypes.string.isRequired,
        category: PropTypes.number.isRequired
    }).isRequired
};