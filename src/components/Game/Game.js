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
		<section className="=pokemon">
			<div className="pokemon__player">
				<h2 className="pokemon__name">{currentPokemon.name}</h2>
				<img
					className="pokemon__img"
					src={
						process.env.PUBLIC_URL + "/" + "image" + "/" + currentPokemon.image
					}
				/>
				<span className="pokemon__score">
					{currentPokemon.type} | {currentPokemon.score}
				</span>
				<h3 className="pokemon__info">{currentPokemon.power.title}</h3>
				<p className="pokemon__info">{currentPokemon.power.content}</p>
			</div>
			<div className="pokemon__player">
				<h2 className="pokemon__name">{currentPokemon2.name}</h2>
				<img
					className="pokemon__img"
					src={
						process.env.PUBLIC_URL + "/" + "image" + "/" + currentPokemon2.image
					}
				/>
				<span className="pokemon__info">
					{currentPokemon2.type} | {currentPokemon2.score}
				</span>
				<h3 className="pokemon__info">{currentPokemon2.power.title}</h3>
				<p className="pokemon__info">{currentPokemon2.power.content}</p>
			</div>
			<button className="pokemon__btn" onClick={ClickHandler}>
				PLAY GAME
			</button>
		</section>
	);
};

export default PokemonGame;
