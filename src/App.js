import { useEffect, useState } from "react";
import axios from "axios";

import Game from "./components/Game/Game";

const App = () => {
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		// Get all pokemon data
		const getPokemon = async () => {
			try {
				const response = await axios.get(`http://localhost:3000/pokemon`);
				const pokemonData = await response.data.pokemonData;
				setPokemon(pokemonData);
			} catch (error) {
				console.log(error);
			}
		};
		getPokemon();
	}, []);

	if (pokemon === null || pokemon === undefined) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<Game pokemon={pokemon} />
		</div>
	);
};

export default App;
