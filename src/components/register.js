import React from 'react'
import PropTypes from 'prop-types';

export default class Register extends React.Component {
    render() {
        return (
            <div className="panel">
                <h3>Please buy the ticket firstly</h3>
                <div>
                    <label>Name</label>
                    <input ref="name"/>
                </div>
                <div>
                    <label>Number of seats required</label>
                    <input type="number" ref="number" max={this.props.availableSeats} min="0"/>
                </div>
                <div>
                    <button className="submit-btn" onClick={(e) => this.handleClick(e)}>BUY</button>
                </div>
            </div>
        );
    }

    handleClick(e) {
        const nameNode = this.refs.name;
        const numberNode = this.refs.number;
        if (nameNode.value === '' || numberNode.value === 0) {
            return;
        }

        if (numberNode.value > this.props.availableSeats || numberNode.value <= 0) {
            return;
        }

        this.props.onRegisterUser(nameNode.value.trim(), numberNode.value);

        nameNode.value = '';
        numberNode.value = null;
    }
}

Register.propTypes = {
    onRegisterUser: PropTypes.func.isRequired,
    availableSeats: PropTypes.number.isRequired
};