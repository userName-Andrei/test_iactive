import { configureStore } from "@reduxjs/toolkit";
import messageReduce from "./slices/messageSlice";

const store = configureStore({
    reducer: {
        messages: messageReduce,
    },
    devTools: process.env.NODE_ENV !== "development" ? false : true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
