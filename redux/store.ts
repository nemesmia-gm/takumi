import { createWrapper } from "next-redux-wrapper";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { configReducer } from "./slices/config";

const makeStore = () =>
  configureStore({
    reducer: {
      [configReducer.name]: configReducer.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
