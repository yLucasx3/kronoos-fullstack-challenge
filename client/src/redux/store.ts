import { combineReducers, configureStore } from "@reduxjs/toolkit";
import transactionReducer from "@/redux/features/transaction-slice";

const rootReducer = combineReducers({
  transactionReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
