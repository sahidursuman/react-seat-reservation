import React from 'react'
import PropTypes from 'prop-types';

export default class Register extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <label>
                        Name:
                        <input ref="name"/>
                    </label>
                </div>
                <div>
                    <label>
                        Number of seats:
                        <input type="number" ref="number"/>
                    </label>
                </div>
                <div>
                    <button onClick={(e) => this.handleClick(e)}>Register</button>
                </div>
            </div>
        );
    }

    handleClick(e) {
        const nameNode = this.refs.name;
        const numberNode = this.refs.number;

        this.props.onRegisterUser(nameNode.value.trim(), numberNode.value);

        nameNode.value = '';
        numberNode.value = 0;
    }
}

Register.propTypes = {
    onRegisterUser: PropTypes.func.isRequired
};