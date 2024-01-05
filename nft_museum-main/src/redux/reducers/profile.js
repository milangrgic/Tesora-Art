import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    items : null,
    offers : null,
    favourates : null,
    users : null,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ActionTypes.GetProfileViewModel :
            return({
                ...state,
                items : action.payload.items,
                offers : action.payload.offers,
                favourates : action.payload.favourates,
                users : action.payload.users,
            })
        default :
            return state;
    }
}