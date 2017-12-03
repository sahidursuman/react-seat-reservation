function getTargetSeat(state, seat) {
    let target = state.layout.first.firstColumn.filter((seatItem) => (seatItem.id === seat.id));
    if (target.length) {
        return target[0];
    }

    target = state.layout.first.secondColumn.filter((seatItem) => (seatItem.id === seat.id));
    if (target.length) {
        return target[0];
    }

    target = state.layout.first.thirdColumn.filter((seatItem) => (seatItem.id === seat.id));
    if (target.length) {
        return target[0];
    }

    if (state.layout.second) {
        target = state.layout.second.firstColumn.filter((seatItem) => (seatItem.id === seat.id));
        if (target.length) {
            return target[0];
        }
        target = state.layout.second.secondColumn.filter((seatItem) => (seatItem.id === seat.id));
        if (target.length) {
            return target[0];
        }
        target = state.layout.first.thirdColumn.filter((seatItem) => (seatItem.id === seat.id));
        if (target.length) {
            return target[0];
        }
    }
}

export default function (state, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'LOAD_BUS_PLAN':
            newState = action.busPlan;
            break;

        case 'SELECT_SEAT':
            const targetSeat = getTargetSeat(newState, action.seat);
            targetSeat.selected = !targetSeat.selected;
            break;
    }

    return newState;
}