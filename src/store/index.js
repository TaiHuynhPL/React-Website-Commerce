import { configureStore } from "@reduxjs/toolkit";

import popupReducer from "./popup";
import userLoginReducer from "./userlogin";
import listCartReducer from "./listCart";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    userlogin: userLoginReducer,
    listcart: listCartReducer,
  },
});

export default store;
