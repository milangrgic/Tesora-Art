import axios from "axios";

import { PRIVATE_TESORA_API } from "../../static/constants";
import { authorization } from "../../utils/helper";
import ActionTypes from "./actionTypes";

export const GetActivityViewModel = () => async dispatch => {
    try {
        const header = authorization();

        let res = await axios.get(`${PRIVATE_TESORA_API}Activity/GetActivityViewModel`, {}, header)

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.GetActivityViewModel,
                payload: res.data
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const GetCollectionViewDetailModel = () => async dispatch => {
    try {
        const header = authorization();

        let res = await axios.get(`${PRIVATE_TESORA_API}CollectionViewDetail/GetCollectionViewDetailModel`, {}, header)

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.GetCollectionViewDetailModel,
                payload: res.data
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const GetHomeViewModel = () => async dispatch => {
    try {
        const header = authorization();
        console.log(header)
        let res = await axios.get(`${PRIVATE_TESORA_API}Home/GetHomeViewModel`, {}, header)

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.GetHomeViewModel,
                payload: res.data
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const GetItemViewViewModel = () => async dispatch => {
    try {
        const header = authorization();

        let res = await axios.get(`${PRIVATE_TESORA_API}ItemView/GetItemViewViewModel`, {}, header)

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.GetItemViewViewModel,
                payload: res.data
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const GetMarketPlaceViewModel = () => async dispatch => {
    try {
        const header = authorization();

        let res = await axios.get(`${PRIVATE_TESORA_API}MarketPlace/GetMarketPlaceViewModel`, {}, header)

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.GetMarketPlaceViewModel,
                payload: res.data
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const GetMyCollectionViewModel = () => async dispatch => {
    try {
        const header = authorization();

        let res = await axios.get(`${PRIVATE_TESORA_API}MyCollection/GetMyCollectionViewModel`, {}, header)

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.GetMyCollectionViewModel,
                payload: res.data
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const GetProfileViewModel = () => async dispatch => {
    try {
        const header = authorization();

        let res = await axios.get(`${PRIVATE_TESORA_API}Profile/GetProfileViewModel`, {}, header)

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.GetProfileViewModel,
                payload: res.data
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const GetEditCollection = (collection_id) => async dispatch => {
    try {
        const header = authorization();

        let res = await axios.get(`${PRIVATE_TESORA_API}Collection/EditCollection/${collection_id}`, {}, header)

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.GetEditCollection,
                payload: res.data
            })
        }

    } catch (err) {
        console.log(err)
    }
}