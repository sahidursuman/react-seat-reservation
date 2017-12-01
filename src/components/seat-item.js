import React from 'react'
import './seat-item.css';
import PropTypes from 'prop-types';

export default class SeatItem extends React.Component {
    render() {
        const {seat} = this.props;
        return (
            <span
                className={'seat-box ' + 'category-' + seat.category + ' ' + (seat.occupied ? 'occupied' : (seat.selected ? 'selected' : ''))}
                onClick={this.props.onClick}>
                {/*{seat.occupied ? "X" : seat.seatNo}*/}
            </span>
        )
    }
}

SeatItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    seat: PropTypes.shape({
        occupied: PropTypes.bool.isRequired,
        selected: PropTypes.bool.isRequired,
        seatNo: PropTypes.string.isRequired,
        category: PropTypes.number.isRequired
    }).isRequired
};