import { applyMiddleware, compose } from "redux";
import { combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//El thunk y el compose se relacionan con el middleware, esto para poder trabajar en redux con acciones asincronas

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);