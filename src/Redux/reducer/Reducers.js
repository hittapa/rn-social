import * as types from '../Action/Actiotype'

const initialState = {
    notification: [],
    navigation: ''
}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_NOTIFICATIONDATA:
            {
                return {
                    ...state,
                    notification: action.payload
                }
            };
        case types.GET_NAVIGATION:
            {
                return {
                    ...state,
                    navigation: action.payload
                }
            };
        default:
            return state;
    }
}

export default userReducers;