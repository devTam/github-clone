const { SIGN_IN, SIGN_OUT } = require("./types")

const INITIAL_STATE = {
    token: null
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
       
        case SIGN_IN:
            return {
                ...state,
                token: action.payload
            }
        case SIGN_OUT:
            return {
                ...state,
                token: null
            }

        default:
            return state;
    }
}

export default reducer;