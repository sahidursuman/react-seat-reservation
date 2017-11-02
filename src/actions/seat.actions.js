export const SELECT_SEAT = 'SELECT_SEAT';

export function selectSeat(user, seat) {
    return { type: SELECT_SEAT, user, seat }
}

