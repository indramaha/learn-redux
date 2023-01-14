import { authReducer } from "./authReducer";
import { numberStateReducer } from "./numberState";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: numberStateReducer,
    login: authReducer,
})

export default rootReducer;