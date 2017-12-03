import {
    LOAD_BUS_PLAN,
    SELECT_SEAT,
} from '../actions/seats.actions';

function selectSeat(dispatch, seat) {
    if (seat.isOccupied) {
        return;
    }
    dispatch(
        SELECT_SEAT(seat),
    );
}

function loadBusPlan(dispatch) {
    const busPlan = {
        type: 'double',
        layout: {
            first: {
                firstColumn: [
                    {
                        'type': 'driver',
                    },
                    {
                        'type': 'stairs',
                    },
                    {
                        'id': '22A',
                        'isOccupied': true,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'id': '22B',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',

                    },
                    {
                        'type': 'table',
                    },
                    {
                        'id': '23A',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',

                    },
                    {
                        'id': '23B',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',

                    },
                    {
                        'type': 'normal-seat',
                    },
                    {
                        'type': 'normal-seat',
                    },
                    {
                        'type': 'normal-seat',
                    },
                    {
                        'type': 'normal-seat',
                    },
                    {
                        'type': 'normal-seat',
                    },
                    {
                        'type': 'normal-seat',
                    },
                    {
                        'type': 'toilet',
                    },
                ],
                secondColumn: [
                    {type: 'empty'},
                    {type: 'empty'},
                    {type: 'empty'},
                ],
                thirdColumn: [

                    {
                        'type': 'door',
                    },
                    {
                        'type': 'normal-seat',
                    },
                    {
                        'type': 'normal-seat',
                    },
                    {
                        'id': '22C',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'id': '22D',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',

                    },
                    {
                        'type': 'table',
                    },
                    {
                        'id': '23C',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'id': '23D',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',

                    },
                    {
                        'type': 'normal-seat',
                    },
                    {
                        'type': 'normal-seat',
                    },
                    {
                        'type': 'normal-seat',
                    },
                    {
                        'type': 'normal-seat',
                    },
                    {
                        'type': 'normal-seat',
                    },
                    {
                        'type': 'normal-seat',
                    },
                    {
                        'type': 'stairs',
                    },
                ]
            },
            second: {
                firstColumn: [
                    {
                        'id': '1A',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'id': '1B',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'type': 'stairs'
                    },
                    {
                        'id': '5A',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'id': '5B',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'id': '6A',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'id': '6B',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'id': '7A',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'id': '7B',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'id': '20A',
                        'isOccupied': true,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'id': '20B',
                        'isOccupied': true,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                ],
                secondColumn: [
                    {type: 'empty'},
                    {type: 'empty'},
                    {type: 'empty'},
                ],
                thirdColumn: [
                    {
                        'id': '1C',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'id': '1D',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'id': '5C',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'id': '5D',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',

                    },
                    {
                        'id': '6C',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'id': '6D',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',

                    },
                    {
                        'id': '7C',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'id': '7D',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'stairs',
                    },
                    {
                        'id': '15C',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'id': '15D',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'type': 'normal-seat'
                    },
                    {
                        'id': '20C',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                    {
                        'id': '20D',
                        'isOccupied': false,
                        'isSelected': false,
                        'category': 1,
                        'type': 'seat',
                    },
                ]
            }
        }
    };
    dispatch(
        LOAD_BUS_PLAN(busPlan),
    )
}

export default {
    loadBusPlan,
    selectSeat,
}