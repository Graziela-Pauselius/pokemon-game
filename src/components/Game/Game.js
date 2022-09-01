import { useEffect, useState } from "react";
import "./Game.scss";
import pokeball from "../../img/pokeball.png";

const PokemonGame = ({ pokemon }) => {
	const [currentPokemon, setCurrentPokemon] = useState(null);
	const [currentPokemon2, setCurrentPokemon2] = useState(null);
	const [winner, setWinner] = useState("");

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
					winnerPokemon = currentPokemon;
					setWinner(`Player 1 wins with Pokemon ${winnerPokemon.name} !`);
				}
				if (currentPokemon.score === currentPokemon2.score) {
					setWinner("Player tie!");
				}
				if (currentPokemon.score < currentPokemon2.score) {
					winnerPokemon = currentPokemon2;
					setWinner(`Player 2 wins with Pokemon ${winnerPokemon.name}`);
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
		<section className="pokemon">
			<h1 className="pokemon__header">POKEMON BATTLE</h1>
			<div className="pokemon__winner">
				{winner} <img className="pokemon__ball" src={pokeball} />
			</div>
			<div className="pokemon__section">
				<div className="pokemon__card">
					<h1>Player 1</h1>
					<h2 className="pokemon__name">{currentPokemon.name}</h2>
					<img
						className="pokemon__img"
						src={
							process.env.PUBLIC_URL +
							"/" +
							"image" +
							"/" +
							currentPokemon.image
						}
					/>
					<span className="pokemon__score">
						{currentPokemon.type} | HP {currentPokemon.score}
					</span>
					<h3 className="pokemon__info">{currentPokemon.power.title}</h3>
					<p className="pokemon__info">{currentPokemon.power.content}</p>
				</div>
				<div className="pokemon__btn-container">
					<button className="pokemon__btn" onClick={ClickHandler}>
						PLAY GAME
					</button>
				</div>
				<div className="pokemon__card">
					<h1>Player 2</h1>

					<h2 className="pokemon__name">{currentPokemon2.name}</h2>
					<img
						className="pokemon__img"
						src={
							process.env.PUBLIC_URL +
							"/" +
							"image" +
							"/" +
							currentPokemon2.image
						}
					/>
					<span className="pokemon__info">
						{currentPokemon2.type} | HP {currentPokemon2.score}
					</span>
					<h3 className="pokemon__info">{currentPokemon2.power.title}</h3>
					<p className="pokemon__info">{currentPokemon2.power.content}</p>
				</div>
			</div>
		</section>
	);
};

export default PokemonGame;
