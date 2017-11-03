import React from 'react'
import './seat-item.css';
import PropTypes from 'prop-types';

export default class SeatItem extends React.Component {
    render() {
        return (
            <button
                className={'seat-box ' + (this.props.occupied ? 'occupied' : (this.props.selected ? 'selected' : ''))}
                onClick={this.props.onClick}>
                {this.props.occupied ? "X" : this.props.seatNo}
            </button>
        )
    }
}

SeatItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    occupied: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
    seatNo: PropTypes.string.isRequired
};