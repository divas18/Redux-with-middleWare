import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import { thunk } from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;


/*

Latest way to create store

import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [logger, thunk],
});

export default store;

*/