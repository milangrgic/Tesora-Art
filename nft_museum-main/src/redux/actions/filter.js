
import ActionTypes from "./actionTypes";

export const SetFilterSortBy = (type) => async dispatch => {
    try {
        dispatch({
            type: ActionTypes.SetFilterSortBy,
            payload: type
        })

    } catch (err) {
        console.log(err)
    }
}

export const SetFilterPrice = (type) => async dispatch => {
    try {
        dispatch({
            type: ActionTypes.SetFilterPrice,
            payload: type
        })

    } catch (err) {
        console.log(err)
    }
}

export const SetFilterCollection = (type) => async dispatch => {
    try {
        dispatch({
            type: ActionTypes.SetFilterCollection,
            payload: type
        })

    } catch (err) {
        console.log(err)
    }
}

export const SetFilterCategory = (type) => async dispatch => {
    try {
        dispatch({
            type: ActionTypes.SetFilterCategory,
            payload: type
        })

    } catch (err) {
        console.log(err)
    }
}