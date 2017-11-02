export const REGISTER_USER = 'REGISTER_USER';
export const FINISH_USER = 'FINISH_USER';

export function registerUser(name, numberOfSeats) {
    return { type: REGISTER_USER, name, numberOfSeats }
}

export function finishUser(user) {
    return { type: FINISH_USER, user }
}