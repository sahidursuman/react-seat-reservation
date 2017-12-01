import React from 'react'
import SeatItem from './seat-item';
import PropTypes from 'prop-types';

export default class BusPlan extends React.Component {
    render() {
        const {user, allowNumbers, busDecker, decker} = this.props;
        return (
            <div className="panel">
                <h3>Welcome {user.name}!</h3>
                <h3>Seat map in bus, <span className="seat-no">{allowNumbers}</span> seats allowed</h3>

                <div style={{float: 'left', marginRight: '50px', borderRight: 'solid 1px', paddingRight: '50px'}}>
                    {this.renderDoubleBusLowerDeck()}
                </div>
                <div>
                    {this.renderDoubleBusUpperDeck()}
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

    findSeatByLabel(label) {
        return this.props.seats.find((seat) => {
            return seat.seatNo === label;
        });
    }

    renderDoubleBusLowerDeck() {
        return <div>
            <div className="row-indicator">
                <span className="label">A</span>
                <span className="label">B</span>
                <span></span>
                <span className="label">C</span>
                <span className="label">D</span>
            </div>
            <div className="cabin">
                <div className="seat-column">
                    {/*driver*/}
                    <div className="driver">Driver</div>
                    {/*stairs*/}
                    <div className="small-stair">Small Stairs</div>
                    {/*22*/}
                    <div>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('22A'))}
                                  seat={this.findSeatByLabel('22A')}/>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('22B'))}
                                  seat={this.findSeatByLabel('22B')}/>
                    </div>
                    {/*table*/}
                    <div className="table"><div className="center"></div></div>
                    <div>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('23A'))}
                                  seat={this.findSeatByLabel('23A')}/>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('23B'))}
                                  seat={this.findSeatByLabel('23B')}/>
                    </div>
                    {/*24-26*/}
                    {[24, 25, 26].map(() => {
                        return <div>
                            <span className="not-reservable seat-box"></span>
                            <span className="not-reservable seat-box"></span>
                        </div>
                    })}
                    {/*toilet*/}
                    <div className="toilet label">WC</div>
                </div>
                <div className="seat-no-column">
                    <div></div>
                    <div></div>
                    {/*22-23*/}
                    <div className="label">22</div>
                    <div></div>
                    <div className="label">23</div>
                    {/*24-27*/}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="seat-column">
                    {/*door*/}
                    <div></div>
                    <div></div>
                    {/*22*/}
                    <div>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('22C'))}
                                  seat={this.findSeatByLabel('22C')}/>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('22D'))}
                                  seat={this.findSeatByLabel('22D')}/>
                    </div>
                    {/*table*/}
                    <div className="table"><div className="center"></div></div>
                    {/*23*/}
                    <div>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('23C'))}
                                  seat={this.findSeatByLabel('23C')}/>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('23D'))}
                                  seat={this.findSeatByLabel('23D')}/>
                    </div>

                    {/*24-26*/}
                    {[24, 25, 26].map(() => {
                        return <div>
                            <span className="not-reservable seat-box"></span>
                            <span className="not-reservable seat-box"></span>
                        </div>
                    })}

                    {/*stairs*/}
                    <div className="small-stair">Small Stairs</div>
                </div>
            </div>
        </div>;
    }

    renderDoubleBusUpperDeck() {
        return <div>
            <div className="row-indicator">
                <span className="label">A</span>
                <span className="label">B</span>
                <span></span>
                <span className="label">C</span>
                <span className="label">D</span>
            </div>
            <div className="cabin">
                <div className="seat-column">
                    {/*1*/}
                    <div>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('1A'))}
                                  seat={this.findSeatByLabel('1A')}/>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('1B'))}
                                  seat={this.findSeatByLabel('1B')}/>
                    </div>
                    {/*stairs*/}
                    <div className="stair">Stairs</div>
                    {/*5-7*/}
                    <div>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('5A'))}
                                  seat={this.findSeatByLabel('5A')}/>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('5B'))}
                                  seat={this.findSeatByLabel('5B')}/>
                    </div>
                    <div>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('6A'))}
                                  seat={this.findSeatByLabel('6A')}/>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('6B'))}
                                  seat={this.findSeatByLabel('6B')}/>
                    </div>
                    <div>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('7A'))}
                                  seat={this.findSeatByLabel('7A')}/>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('7B'))}
                                  seat={this.findSeatByLabel('7B')}/>
                    </div>
                    {/*8-16*/}
                    {[8, 9, 10, 11, 12, 13, 14, 15, 16].map(() => {
                        return <div>
                            <span className="not-reservable seat-box"></span>
                            <span className="not-reservable seat-box"></span>
                        </div>
                    })}
                    {/*20*/}
                    <div>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('20A'))}
                                  seat={this.findSeatByLabel('20A')}/>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('20B'))}
                                  seat={this.findSeatByLabel('20B')}/>
                    </div>
                </div>
                <div className="seat-no-column">
                    {/*1*/}
                    <div className="label">01</div>
                    <div></div>
                    <div></div>
                    {/*5*/}
                    <div className="label">05</div>
                    <div className="label">06</div>
                    <div className="label">07</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    {/*8-14*/}

                    {/*15*/}
                    <div className="label">15</div>
                    {/*16-19*/}
                    <div></div>
                    <div></div>
                    {/*20*/}
                    <div className="seat-no-20 label">20</div>
                    <div><span className="not-reservable seat-box"></span></div>
                </div>
                <div className="seat-column">
                    {/*1*/}
                    <div>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('1C'))}
                                  seat={this.findSeatByLabel('1C')}/>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('1D'))}
                                  seat={this.findSeatByLabel('1D')}/>
                    </div>
                    {/*2-3*/}
                    {[2, 3].map(() => {
                        return <div>
                            <span className="not-reservable seat-box"></span>
                            <span className="not-reservable seat-box"></span>
                        </div>
                    })}
                    {/*5-7*/}
                    <div>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('5C'))}
                                  seat={this.findSeatByLabel('5C')}/>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('5D'))}
                                  seat={this.findSeatByLabel('5D')}/>
                    </div>
                    <div>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('6C'))}
                                  seat={this.findSeatByLabel('6C')}/>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('6D'))}
                                  seat={this.findSeatByLabel('6D')}/>
                    </div>
                    <div>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('7C'))}
                                  seat={this.findSeatByLabel('7C')}/>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('7D'))}
                                  seat={this.findSeatByLabel('7D')}/>
                    </div>

                    {/*8-10*/}
                    {[8, 9, 10].map(() => {
                        return <div>
                            <span className="not-reservable seat-box"></span>
                            <span className="not-reservable seat-box"></span>
                        </div>
                    })}

                    {/*stairs*/}
                    <div className="stair">Stairs</div>
                    {/*15*/}
                    <div>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('15C'))}
                                  seat={this.findSeatByLabel('15C')}/>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('15D'))}
                                  seat={this.findSeatByLabel('15D')}/>
                    </div>

                    {/*16-18*/}
                    {[16, 17, 18].map(() => {
                        return <div>
                            <span className="not-reservable seat-box"></span>
                            <span className="not-reservable seat-box"></span>
                        </div>
                    })}

                    {/*20*/}
                    <div>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('20C'))}
                                  seat={this.findSeatByLabel('20C')}/>
                        <SeatItem onClick={() => this.handleClick(this.findSeatByLabel('20D'))}
                                  seat={this.findSeatByLabel('20D')}/>
                    </div>
                </div>
            </div>
        </div>;
    }
}

BusPlan.propTypes = {
    seats: PropTypes.arrayOf(PropTypes.shape({
        occupied: PropTypes.bool.isRequired,
        selected: PropTypes.bool.isRequired,
        seatNo: PropTypes.string.isRequired,
        category: PropTypes.number.isRequired
    }).isRequired).isRequired,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        numberOfSeats: PropTypes.number.isRequired,
        selectedSeats: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }),
    allowNumbers: PropTypes.number.isRequired,
    onSeatClick: PropTypes.func.isRequired,
    onFinishReservation: PropTypes.func.isRequired,
    busDecker: PropTypes.number.isRequired,
    decker: PropTypes.number.isRequired
};