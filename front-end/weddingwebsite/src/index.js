import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { user, saveTheDateForm, rsvpForm } from './redux/reducers/account';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import { BrowserRouter } from 'react-router-dom';


const weddingApp = combineReducers({ user, saveTheDateForm, rsvpForm });

const store = createStore(weddingApp,
  {},
  composeWithDevTools(
    applyMiddleware(thunk, promiseMiddleware()))
)
ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
