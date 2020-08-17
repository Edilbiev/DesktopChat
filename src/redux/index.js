import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import contacts from "./reducers/contacts";
import chat from "./reducers/chat";
import profile from "./reducers/profile";
import application from "./reducers/application";

const reducer = combineReducers({ contacts, chat, profile, application });

export const store = createStore(reducer, applyMiddleware(thunk, logger));
