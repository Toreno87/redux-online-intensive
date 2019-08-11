// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Instrumentss
import './theme/init';

// App
import { store } from './init/store';
import App from './navigation/App';

render(
    <Provider store = { store }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app'));
