import React, {Component} from 'react';

export default class SeatView extends Component {
    constructor() {
        super();
        this.getClassName = this.getClassName.bind(this);
        this.onSeatClick = this.onSeatClick.bind(this);
    }

    getClassName() {
        const {seat} = this.props;
        const classNameArray = ['busPlan__seat'];
        classNameArray.push('category_' + seat.category);

        if (seat.isOccupied) {
            classNameArray.push('busPlan__seat_occupied');
        } else {
            if (seat.selected) {
                classNameArray.push('busPlan__seat_selected');
            }
        }

        return classNameArray.join(' ');
    }

    onSeatClick(event) {
        event.preventDefault();
        if (this.props.onSeatClick) {
            this.props.onSeatClick();
        } else {
            console.log('onSeatClick is undefined');
        }
    }

    render() {
        const {seat} = this.props;
        const className = this.getClassName();
        return (
            <span
                className={className}
                onClick={this.onSeatClick}
                role='button'
            >
                {seat.id}
            </span>
        );
    }
}