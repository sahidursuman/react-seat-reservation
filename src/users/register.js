import * as React from 'react';

class Register extends React.Component {
    render() {
        const currentUser = this.props.currentUser;
        const numberOfSeats = this.props.numberOfSeats;

        return (
            <form>
                <div>
                    <label>
                        Name:
                        <input name="name" value={currentUser} onChange={this.props.onChangeName}/>
                    </label>
                </div>
                <div>
                    <label>
                        Number of seats:
                        <input type="number" name="number" value={numberOfSeats} onChange={this.props.onChangeNumber}/>
                    </label>
                </div>
            </form>
        );
    }
}

export default Register;