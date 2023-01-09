import { configureStore } from "@reduxjs/toolkit";
// import { logger } from "redux-logger";
import imageReducer from "../features/allImages/allImageSlice";
import allPathsReducer from "../features/allPaths/allPathsSlice";

const store = configureStore({
  reducer: {
    allImages: imageReducer,
    allPaths: allPathsReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
