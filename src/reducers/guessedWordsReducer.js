import { actionType, actionTypes } from '../actions'

/**
 * Reducers do stuff
 * function guessedWordsReducer
 * @param {array} state - array of guessed words
 * @param {object} action - action to be reduced
 * @returns {array} - bew guessedWordsState
 */

export default (state=[], action) => {
    switch(action.type) {
        case actionTypes.GUESS_WORD:
            return [...state, action.payload];
        default:
            return state; 
    }

}