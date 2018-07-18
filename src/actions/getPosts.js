import * as types from '../constants';
import callApi from '../utils/callApi';

export function getPosts(endPoint) {
    return (dispatch) => {
        callApi(endPoint)
            .then(data => {
                dispatch({
                    type: types.GET_POSTS_SUCCESS,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: types.GET_POSTS_FAILURE,
                    payload: error
                })
            })
    }
}