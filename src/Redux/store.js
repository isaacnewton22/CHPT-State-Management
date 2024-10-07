import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slices/todoSlice.js';
import { persistReducer } from "redux-persist";
import { reducer } from "../Reducer.js";
import storage from "redux-persist/es/storage";
import persistStore from "redux-persist/es/persistStore";


export const store = configureStore({
    reducer: {
        task: persistReducer({key: 'tasks', storage}, todoReducer)
    },
})

export const persistor = persistStore(store);