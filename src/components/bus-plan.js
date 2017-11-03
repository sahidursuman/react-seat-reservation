import React from 'react'
import SeatItem from './seat-item';
import PropTypes from 'prop-types';

export default class BusPlan extends React.Component {
    render() {
        return (
            <div className="panel">
                <h3>Welcome {this.props.user.name}!</h3>
                <h3>Seat map in bus, <span className="seat-no">{this.props.allowNumbers}</span> seats allowed</h3>
                <div>
                    {this.props.seats.map((seat, index) =>
                        <span key={index}><SeatItem {...seat} onClick={() => this.handleClick(seat)}/></span>
                    )}
                </div>
                {this.props.user.selectedSeats.length <= 0 ? '' :
                    <h3>
                        Your selected seats: {this.props.user.selectedSeats.map((seat, i) =>
                        <span key={i} className="seat-tag">{seat}</span>
                    )}
                    </h3>
                }

                <div>
                    <button className="submit-btn" onClick={() => this.props.onFinishReservation()}>Finish & Quit
                    </button>
                </div>
            </div>
        );
    }

    handleClick(seat) {
        if (seat.occupied) {
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
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        numberOfSeats: PropTypes.number.isRequired,
        selectedSeats: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }),
    allowNumbers: PropTypes.number.isRequired,
    onSeatClick: PropTypes.func.isRequired,
    onFinishReservation: PropTypes.func.isRequired
};