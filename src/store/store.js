import { legacy_createStore as createStore, combineReducers } from "redux";
import contactReducer from "../reducers/contactReducer";
import authReducer from "../reducers/authReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = { key: "root", storage };
let reducers = combineReducers({ contactReducer, authReducer });
const persistedReducer = persistReducer(persistConfig, reducers);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
