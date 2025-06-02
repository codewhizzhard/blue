import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { blueBreedApi } from "./services/blueBreedApi";
import authReducer from "./services/auth.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [blueBreedApi.reducerPath]: blueBreedApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blueBreedApi.middleware),
})

setupListeners(store.dispatch);
