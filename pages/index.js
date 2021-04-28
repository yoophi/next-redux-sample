import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchPokemonByName } from "../store/reducers/pokemon/action-creators";

export default function Home() {
  const { pokemon } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchPokemonByName("ditto"));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(pokemon, null, 2)}</pre>
    </div>
  );
}
