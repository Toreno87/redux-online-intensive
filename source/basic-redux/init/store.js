import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import { rootReduser } from './rootReducer';

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: () => '#139BFE',
        prevState: () => '#1C5FAF',
        action: () => '#149945',
        nextState: () => '#A47104',
        error: () => '#ff0005',
    },
});
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ?devtools : compose;
const preloadedState = JSON.parse(localStorage.getItem('gallery'));
const enhancedStore = composeEnhancers(applyMiddleware(logger));

export const store = preloadedState
    ? createStore(rootReduser, preloadedState, enhancedStore)
    : createStore(rootReduser, enhancedStore);

store.subscribe(() => {
    const state = store.getState();

    localStorage.setItem('gallery', JSON.stringify(state));
});