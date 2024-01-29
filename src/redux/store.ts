import storage from 'redux-persist/lib/storage';

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist';

import gamesSlice from "@/redux/slices/games-slice";
import questionsSlice from "@/redux/slices/questions-slice";
import topicsSlice from "@/redux/slices/topics-slice";

const rootPersistConfig = {
  key: "root",
  version: 1,
  storage: storage,
};

const rootReducer = combineReducers({
  questions: questionsSlice,
  topics: topicsSlice,
  games: gamesSlice,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
