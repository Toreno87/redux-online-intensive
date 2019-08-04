//Core
import { combineReducers } from 'redux';

//Redusers
import { galleryReducer } from '../bus/gallery/reduser';

export const rootReduser = combineReducers({
    gallery: galleryReducer,
});