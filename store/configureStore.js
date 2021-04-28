import { createWrapper } from "next-redux-wrapper";
import pokemonSlice from "./reducers/pokemon";

const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const { configureStore } = require("@reduxjs/toolkit");
const makeStore = (context) =>
  configureStore({
    reducer: {
      [pokemonSlice.name]: pokemonSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: getDefaultMiddleware(),
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});
