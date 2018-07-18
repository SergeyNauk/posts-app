import * as types from '../constants';
import callApi from "../utils/callApi";

export function getTargetPost(endPoint){
    return (dispatch) => {
        callApi(endPoint)
            .then(data => {
                dispatch({
                    type: types.GET_TARGET_POST_SUCCESS,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: types.GET_TARGET_POST_FAILURE,
                    payload: error
                })
            })
    }
}