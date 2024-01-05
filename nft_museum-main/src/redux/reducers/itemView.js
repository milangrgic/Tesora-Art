import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    collections : null,
    items : null,
    categories : null,
    offers : null,
    histories : null,
    prices : null,
    users : null,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ActionTypes.GetItemViewViewModel :
            return({
                ...state,
                collections : action.payload.collections,
                items : action.payload.items,
                categories : action.payload.categories,
                offers : action.payload.offers,
                histories : action.payload.histories,
                prices : action.payload.prices,
                users : action.payload.users
            })
        default :
            return state;
    }
}