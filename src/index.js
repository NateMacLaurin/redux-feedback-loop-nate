import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_FEELING':
            return state;
        case 'SET_UNDERSTANDING':
            return state;
        case 'SET_SUPPORT':    
            return state;
        case 'SET_COMMENTS':
            return state;
        default:
            return state;
    }
}

const reduxStore = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}<App /></Provider>, document.getElementById('root'));
registerServiceWorker();
