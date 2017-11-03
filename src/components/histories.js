import React from 'react'
import PropTypes from 'prop-types';

export default class Histories extends React.Component {
    render() {
        if (this.props.histories.length > 0) {
            return (
                <div className="panel">
                    <h3>Seat reservation histories:</h3>
                    <ul>
                        {this.props.histories.map((entry, index) =>
                            <li key={index}>
                                {index + 1}. {entry.user.name} {entry.user.selectedSeats.map((seatNo, i) =>
                                <span key={i} className="seat-tag">{seatNo}</span>
                            )}
                            </li>
                        )}
                    </ul>
                </div>
            );
        } else {
            return '';
        }
    }
}

Histories.propTypes = {
    histories: PropTypes.arrayOf(PropTypes.shape({
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
            numberOfSeats: PropTypes.number.isRequired,
            selectedSeats: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        })
    }))
};