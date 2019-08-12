// Core
import { fromJS, List } from 'immutable';

// Instruments
import { FILL_POSTS, CREATE_POST_ASYNC } from './types';

const initialState = List();

export const postsReduser = (state = initialState, action) => {
    switch (action.type) {
        case FILL_POSTS:
            return fromJS(action.payload);
        default:
            return state;
    }
}