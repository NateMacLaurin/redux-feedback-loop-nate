import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

//create a default state object
const defaultFeedback = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
}

//one reducer to hold all 4 required states selected individually with action types
const feedbackReducer = (state = defaultFeedback, action) => {
    switch(action.type){
        case 'SET_FEELING': 
            return {...state, feeling: action.payload};
        case 'SET_UNDERSTANDING':
            return {...state, understanding: action.payload};
        case 'SET_SUPPORT':    
            return {...state, support: action.payload};
        case 'SET_COMMENT':
            return {...state, comments: action.payload};
        case 'NEW':
            return state;
        default:
            return state;
    }
}

//combine reducers
const reduxStore = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);

//render with redux store provider
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
