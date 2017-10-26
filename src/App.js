import * as React from 'react';

import './App.css';
import BusPlan from './bus-plan/bus-plan';
import Register from './users/register';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: '',
            numberOfSeats: 0,
            seats: this.initSeat(20),
            history: [],
        };
        this.changeName = this.changeName.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
        this.finishChoose = this.finishChoose.bind(this);
    }

    render() {
        const histories = this.state.history.map((entry, index) =>
            <li key={index}>
                {index + 1}. {entry.name}: {entry.chosenSeats}
            </li>
        );

        let availableSeats = this.countAvailableSeats();
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Seat Reservation</h1>
                </header>
                <div className="App-intro">
                    <p>{availableSeats} available seats</p>
                    <p>{availableSeats <= 0 ? 'NO MORE SEATE!!!' : ''}</p>
                    {availableSeats > 0
                        ? <Register currentUser={this.state.currentUser}
                                    numberOfSeats={this.state.numberOfSeats}
                                    onChangeName={this.changeName}
                                    onChangeNumber={this.changeNumber}/>
                        : ''}

                    {(this.state.currentUser && this.state.numberOfSeats > 0 && this.state.numberOfSeats <= availableSeats)
                        ? <BusPlan seats={this.state.seats} allowNumbers={this.state.numberOfSeats}/>
                        : ''}

                    {(this.state.currentUser && this.state.numberOfSeats > 0 && this.state.numberOfSeats <= availableSeats)
                        ? <button onClick={this.finishChoose}>Finish</button>
                        : ''}
                </div>
                <div className="App-intro">
                    <p>History</p>
                    <ul>
                        {histories}
                    </ul>
                </div>
            </div>
        );
    }

    changeName(event) {
        this.setState({currentUser: event.target.value});
    }

    changeNumber(event) {
        this.setState({numberOfSeats: event.target.value});
    }

    countAvailableSeats() {
        let count = 0;
        this.state.seats.forEach((seat) => {
            if (!seat.occupied) {
                count++;
            }
        });
        return count;
    }

    initSeat(number) {
        let arr = [];
        for (let i = 1; i <= number; i++) {
            arr[i] = {
                seatNo: i,
                occupied: false,
                selected: false
            };
        }
        return arr;
    }

    finishChoose() {
        let chosenSeats = '';
        this.state.seats.forEach((seat, index) => {
            if (seat.selected) {
                seat.occupied = true;
                chosenSeats += (index) + ',';
            }
            seat.selected = false;
        });
        let history = this.state.history.slice();
        history.push({name: this.state.currentUser, chosenSeats: chosenSeats});

        this.setState({currentUser: '', numberOfSeats: 0, history: history})
    }
}

export default App;
