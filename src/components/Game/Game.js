import { useEffect, useState } from "react";
import "./Game.scss";

const PokemonGame = ({ pokemon }) => {
	const [currentPokemon, setCurrentPokemon] = useState(null);
	const [currentPokemon2, setCurrentPokemon2] = useState(null);

	console.log(pokemon);
	// Generate a ramdom pokemon
	useEffect(() => {
		const randomPokemon = () => {
			try {
				const pokemonData = pokemon;

				const pokemonIndex = Math.floor(Math.random() * pokemonData.length);
				let pokemonSeleted = pokemon[pokemonIndex];
				console.log(pokemonSeleted);
				setCurrentPokemon(pokemonSeleted);
			} catch (error) {
				console.log(error.message);
			}
		};
		randomPokemon();
	}, [currentPokemon]);

	useEffect(() => {
		const randomPokemon = () => {
			try {
				const pokemonData = pokemon;

				const pokemonIndex = Math.floor(Math.random() * pokemonData.length);
				let pokemonSeleted = pokemon[pokemonIndex];
				console.log(pokemonSeleted);
				setCurrentPokemon2(pokemonSeleted);
			} catch (error) {
				console.log(error.message);
			}
		};

		randomPokemon();
	}, [currentPokemon2]);

	const ClickHandler = () => {
		setCurrentPokemon();
		setCurrentPokemon2();
	};

	useEffect(() => {
		let winnerPokemon = {};

		const winner = () => {
			if (currentPokemon && currentPokemon2) {
				if (currentPokemon.score > currentPokemon2.score) {
					// return <h1>Player 1 wins!</h1>
					winnerPokemon = currentPokemon;
					console.log(`Player ${winnerPokemon.name} 1 wins!`);
				}
				if (currentPokemon.score === currentPokemon2.score) {
					// return <h1>It's a Tie!</h1>
					console.log("Player tie!");
				}
				if (currentPokemon.score < currentPokemon2.score) {
					winnerPokemon = currentPokemon2;
					console.log(`Player ${winnerPokemon.name} win!`);
					// return <h1>Player 2 wins</h1>
				}
			}
		};

		winner();
	}, [currentPokemon, currentPokemon2]);

	console.log(currentPokemon);

	if (currentPokemon === null || currentPokemon === undefined) {
		return <h1>Loading...</h1>;
	}

	return (
		<section>
			<div>
				<h2>{currentPokemon.name}</h2>
				<span>
					{currentPokemon.type} | {currentPokemon.score}
				</span>
				<img
					src={
						process.env.PUBLIC_URL + "/" + "image" + "/" + currentPokemon.image
					}
				/>
			</div>
			<div>
				<h2>{currentPokemon2.name}</h2>
				<span>
					{currentPokemon2.type} | {currentPokemon2.score}
				</span>
				<img
					src={
						process.env.PUBLIC_URL + "/" + "image" + "/" + currentPokemon2.image
					}
				/>
			</div>
			<button onClick={ClickHandler}>PLAY GAME</button>
		</section>
	);
};

export default PokemonGame;
