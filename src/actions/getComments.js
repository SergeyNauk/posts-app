import * as types from '../constants';
import callApi from '../utils/callApi';

export function getComments(endPoint) {
    console.log(endPoint)
    return (dispatch) => {
        callApi(endPoint)
            .then(data => {
                dispatch({
                    type: types.GET_COMMENTS_SUCCESS,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: types.GET_COMMENTS_FAILURE,
                    payload: error
                })
            })
    }
}