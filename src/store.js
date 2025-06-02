import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { blueBreedApi } from "./services/blueBreedApi";

export const store = configureStore({
    reducer: {
        [blueBreedApi.reducerPath]: blueBreedApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blueBreedApi.middleware),
})

setupListeners(store.dispatch);
