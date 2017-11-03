export const SELECT_SEAT = 'SELECT_SEAT';
export const OCCUPY_SEAT = 'OCCUPY_SEAT';

export function selectSeat(user, seat) {
    return { type: SELECT_SEAT, user, seat }
}

export function occupySeat(seatNo) {
    return { type: OCCUPY_SEAT, seatNo }
}

