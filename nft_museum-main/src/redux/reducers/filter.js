import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    filterSortBy: null,
    filterPrice: null,
    filterCollection: null,
    filterCategory: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SetFilterSortBy:
            return ({
                ...state,
                filterSortBy: action.payload,
            })
        case ActionTypes.SetFilterPrice:
            return ({
                ...state,
                filterPrice: action.payload,
            })
        case ActionTypes.SetFilterCollection:
            return ({
                ...state,
                filterCollection: action.payload,
            })
        case ActionTypes.SetFilterCategory:
            return ({
                ...state,
                filterCategory: action.payload,
            })
        default:
            return state;
    }
}