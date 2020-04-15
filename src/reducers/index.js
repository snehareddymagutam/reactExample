import * as actionTypes from '../actions/actionTypes'
const initialState = {
    books: []
}
const books = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_BOOK:
            return {
                ...state
            }

            default:
                return state;
        }
    }
    
    export default books;


