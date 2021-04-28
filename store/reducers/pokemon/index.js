import { searchPokemonByName } from "./action-creators";

const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  loading: false,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [searchPokemonByName.pending.type]: (state, action) => {
      state.loading = true;
    },
    [searchPokemonByName.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.pokemon = action.payload;
    },
    [searchPokemonByName.rejected.type]: (state, action) => {
      state.loading = false;
    },
  },
});
export default pokemonSlice;
