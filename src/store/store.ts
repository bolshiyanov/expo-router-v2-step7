import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeSlice from "./reducers/ThemeSlice";

const rootReducer = combineReducers({
  themeSlice, // Use the correct reducer name here
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
