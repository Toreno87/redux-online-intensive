//Core
import { combineReducers } from 'redux';

//Redusers
import { postsReduser as posts } from '../bus/posts/reduser';

export const rootReduser = combineReducers({
    posts,
});
