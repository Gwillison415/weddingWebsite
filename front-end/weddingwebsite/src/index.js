import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import {user, loginRedirect} from './redux/reducers/account';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import { BrowserRouter } from 'react-router-dom';


const weddingApp = combineReducers({user, loginRedirect});

const store = createStore(weddingApp,
   {},
   composeWithDevTools(
     applyMiddleware(thunkMiddleware, promiseMiddleware()))
)
  ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
