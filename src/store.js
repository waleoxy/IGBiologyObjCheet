import { createStore } from "redux";
import {countReducer} from "./reducers/countReducer"
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(countReducer, composeWithDevTools())