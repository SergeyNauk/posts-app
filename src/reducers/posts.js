import * as types from '../constants';

const initialState = {
    posts: [],
    targetPost: {},
    comments: '',
};

export default function posts(state = initialState, action) {
    switch (action.type) {
        case types.GET_POSTS_SUCCESS:
            return {
                ...state, posts: action.payload
            };
        case types.GET_TARGET_POST_SUCCESS:
            return {
                ...state, targetPost: action.payload
            };
        case types.GET_COMMENTS_SUCCESS:
            return {
                ...state, comments: action.payload
            };
        default:
        return state;
    }
}