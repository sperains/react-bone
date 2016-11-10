

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './containers/App';
import store from './store.js';

console.log(store.getState());

let container = $('#container')[0];

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    container
);