import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ShoeData from "./ShoeData";
import CartInfo from "./cartReducer";
import { getUsername } from "./loginReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["ShoeData", "getUsername"],
};

const rootReducer = combineReducers({
  ShoeData,
  CartInfo,
  getUsername,
});

export default persistReducer(persistConfig, rootReducer);
