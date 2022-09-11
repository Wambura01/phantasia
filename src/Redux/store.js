import { combineReducers, createStore } from "redux";
import reducers from "./Reducers/index";

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export default store;
