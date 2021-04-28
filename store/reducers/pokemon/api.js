import axios from "axios";

export async function searchByName(pokemonName) {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
}
