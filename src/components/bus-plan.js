import React from 'react'
import SeatItem from './seat-item';
import PropTypes from 'prop-types';

export default class BusPlan extends React.Component {
    render() {
        return (
            <div>
                <h1>Seat map in bus, {this.props.allowNumbers} seats allowed</h1>
                {this.props.seats.map((seat) =>
                    <span><SeatItem {...seat} onClick={() => this.handleClick(seat)}/></span>
                )}
            </div>
        )

    }

    handleClick(seat) {
        if (seat.occupied) {
            return;
        }

        if (seat.selected && this.props.allowNumbers >= 0) {
            this.props.allowNumbers++;
        } else if (!seat.selected && this.props.allowNumbers > 0) {
            this.props.allowNumbers--;
        } else {
            return;
        }

        this.props.onSeatClick(seat);
    }
}

BusPlan.propTypes = {
    seats: PropTypes.arrayOf(PropTypes.shape({
        occupied: PropTypes.bool.isRequired,
        selected: PropTypes.bool.isRequired,
        seatNo: PropTypes.string.isRequired
    }).isRequired).isRequired,
    allowNumbers: PropTypes.number.isRequired,
    onSeatClick: PropTypes.func.isRequired
};