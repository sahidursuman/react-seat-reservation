import * as React from 'react';
import SeatItem from './seat/seat-item';

class BusPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seats: props.seats,
            allowNumbers: props.allowNumbers
        };
    }

    renderSeat(seat, i) {
        return <SeatItem value={seat}
                         onClick={() => this.handleClick(i)}/>
    }

    render() {
        const listItems = this.state.seats.map((seat, index) =>
            <span key={index}>
                {this.renderSeat(seat, index)}
            </span>
        );
        return (
            <div>
                <h1>Seat map in bus, {this.state.allowNumbers} seats allowed</h1>
                {listItems}
            </div>
        );
    }

    handleClick(i) {
        const seats = this.state.seats.slice();
        if (seats[i].occupied) {
            return;
        }

        if (seats[i].selected && this.state.allowNumbers >= 0) {
            this.state.allowNumbers++;
        } else if (!seats[i].selected && this.state.allowNumbers > 0) {
            this.state.allowNumbers--;
        } else {
            return;
        }
        seats[i].selected = !seats[i].selected;
        this.setState({seats: seats});
    }
}

export default BusPlan;