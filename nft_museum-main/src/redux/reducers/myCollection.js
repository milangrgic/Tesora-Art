import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    collections : null,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ActionTypes.GetMyCollectionViewModel :
            return({
                ...state,
                collections : action.payload.collections,
            })
        default :
            return state;
    }
}