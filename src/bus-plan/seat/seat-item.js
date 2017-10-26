import * as React from 'react';
import './seat-item.css';

class SeatItem extends React.Component {
    render() {
        return (
            <button className={'seat-box ' + (this.props.value.occupied ? 'occupied' : '') + (this.props.value.selected ? 'selected' : '')} onClick={() => this.props.onClick()}>
                {this.props.value.occupied ? "X" : this.props.value.seatNo}
            </button>
        );
    }
}

export default SeatItem;