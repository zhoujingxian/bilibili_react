const reducer = (state, {type, payload}) => {
    switch (type) {
        case 'recommendData':
            return {...state,recommendData:payload};
        default:
            return state;
    }
}

export default reducer