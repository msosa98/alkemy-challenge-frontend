import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "../reducers/authReducer";
import { operationReducer } from "../reducers/operationReducer";

const myReducers = {
  auth: authReducer,
  operations: operationReducer
}

const reducers = combineReducers(myReducers);

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export let persistor = persistStore(store);
