import { createStore } from "redux";

const numberState = {
    number: 20,
}

const numberStateReducer = (state = numberState) => {
    return state
}

const store = createStore(numberStateReducer)

export default store