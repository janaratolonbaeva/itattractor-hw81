import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import App from './App';
import shortenLinkReducer from "./store/reducers/shortenLinkReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunk));
const store = createStore(shortenLinkReducer, enhancers);

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));