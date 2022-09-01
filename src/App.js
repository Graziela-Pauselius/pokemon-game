import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
	const [pokemon, setPokemon] = useState(null);
	useEffect(() => {
		const getPokemon = async () => {
			try {
				const response = await axios.get(`http://localhost:3000/pokemon`);
				// console.log(response.data.pokemonData);
				const pokemonData = await response.data.pokemonData;
				console.log(pokemonData);
				setPokemon(pokemonData);
			} catch (error) {
				console.log(error);
			}
		};
		getPokemon();
	}, []);

	if (pokemon === null) {
		return <h1>Loding...</h1>;
	}

	return (
		<img
			src={process.env.PUBLIC_URL + "/" + "image" + "/" + pokemon[0].image}
		/>
	);
};

export default App;
