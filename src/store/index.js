import { configureStore } from "@reduxjs/toolkit";

import showsReducer from "./shows";
import errorReducer from "./error";

const store = configureStore({
  reducer: { shows: showsReducer, error: errorReducer },
});

export default store;
