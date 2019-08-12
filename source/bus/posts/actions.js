// Types
import { FILL_POSTS, FETCH_POSTS_ASYNC, CREATE_POST_ASYNC } from './types';

// Instruments
import { api } from '../../REST';

export const fillPosts = (posts) => {
    return {
        type: FILL_POSTS,
        payload: posts,
    };
};

export const fetchPostsAsync = () => async (dispatch) => {
    dispatch({
        type: FETCH_POSTS_ASYNC,
    });

    const responce = await api.posts.fetch();
    const result = await responce.json();

    dispatch(fillPosts(result.data));
};

export const createPostAsync = (comment) => async (dispatch) => {
    dispatch({
        type: CREATE_POST_ASYNC,
    });

    await api.posts.create(comment);

    const responce = await api.posts.fetch();
    const result = await responce.json();

    dispatch(fillPosts(result.data));
};
