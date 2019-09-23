import { actionTypes } from '../actions';
/**
 * @function secretWordReducer
 * @param {string} state - state before reducer
 * @param {object} action - action sent to reducer
 * @returns {string} - new state (secret word payload from action)
 */


export default (state=null, action) => {
    switch (action.type) {
        case actionTypes.SET_SECRET_WORD:
            return action.payload;
        default:
            return state;
    }
}

// Return state as this is called any time any action is going to be dispatched