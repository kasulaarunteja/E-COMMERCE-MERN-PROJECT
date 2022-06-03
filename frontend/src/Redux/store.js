// import {legacy_createStore} from "redux";

// import rootReducers from './Reducer';


// const store = legacy_createStore(rootReducers);

// export default store;

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import rootReducers from './Reducer';
import handleCart from './Reducer/handleCart'
import thunk from "redux-thunk";

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


const middleware = [thunk];

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);

const rootReducer = combineReducers({
    handleCart
});

const store = createStore(rootReducer, enhancer);

export default store;