import {legacy_createStore} from "redux";

import rootReducers from './Reducer';


const store = legacy_createStore(rootReducers);

export default store;