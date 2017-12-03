export const LOAD_BUS_PLAN = function(busPlan) {
    return {
        type: 'LOAD_BUS_PLAN',
        busPlan: busPlan,
    };
};

export const SELECT_SEAT = function (seat) {
    return {
        type: 'SELECT_SEAT',
        seat: seat,
    };
};


