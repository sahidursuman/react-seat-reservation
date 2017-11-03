export const ADD_HISTORY = 'ADD_HISTORY';

export function addHistory(user) {
    return { type: ADD_HISTORY, user }
}

