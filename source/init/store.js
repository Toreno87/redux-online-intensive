// Core
import { createStore } from 'redux';

// Redusers
import { rootReduser } from './rootReducer';

// Enhancer
import { enhancedStore } from './middleware/core';

export const store = createStore(rootReduser, enhancedStore);
