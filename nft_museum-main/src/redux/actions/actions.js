import { authorization } from "../../utils/helper";
import ActionTypes from "./actionTypes";
import axios from "axios";
import { PRIVATE_TESORA_API } from "../../static/constants";

export const CreateCollection = (formState) => async dispatch => {
    try {
        const header = authorization();

        const fn = new FormData();

        fn.append('name', formState.name);
        fn.append('description', formState.description);
        fn.append('banner', formState.banner);
        fn.append('image', formState.image);
        fn.append('royalties', formState.royalties);
        fn.append('contract_symbol', formState.contract_symbol);

        let res = await axios.post(`${PRIVATE_TESORA_API}Collection/CreateCollection`, fn, header);

        if (res.status === 200) {
        }

    } catch (err) {
        console.log(err)
    }
}

export const EditCollection = (formState) => async dispatch => {
    try {
        const header = authorization();

        const fn = new FormData();

        fn.append('name', formState.name);
        fn.append('description', formState.description);
        fn.append('banner', formState.banner);
        fn.append('image', formState.image);
        fn.append('royalties', formState.royalties);
        fn.append('contract_symbol', formState.contract_symbol);

        let res = await axios.post(`${PRIVATE_TESORA_API}Collection/EditCollection`, fn, header);

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.CollectionEdit,
                payload: res.data
            })
        }
    } catch (err) {
        console.log(err)
    }
}

export const CollectionDelete = (collection_id) => async dispatch => {
    try {
        const header = authorization();

        let res = await axios.delete(`${PRIVATE_TESORA_API}Collection/DeleteCollection/${collection_id}`, {}, header);

    } catch (err) {
        console.log(err)
    }
}