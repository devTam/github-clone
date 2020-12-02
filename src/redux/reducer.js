const { SIGN_IN, SIGN_OUT, SIGNED_IN } = require("./types")

const INITIAL_STATE = {
    token: null,
    currentUser: null
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
       
        case SIGN_IN:
            return {
                ...state,
                token: action.payload
            }
       
        case SIGNED_IN:
            return {
                ...state,
                currentUser: action.payload
            }
        case SIGN_OUT:
            return {
                ...state,
                token: null,
                currentUser: null
            }

        default:
            return state;
    }
}

export default reducer;