import { useEffect, useState } from "react";
import "./Game.scss";
import Popup from "../PopUp/PopUp";
import PokemonTitle from "../../img/pokemon.png";

const PokemonGame = ({ pokemon }) => {
	const [currentPokemon, setCurrentPokemon] = useState(null);
	const [currentPokemon2, setCurrentPokemon2] = useState(null);
	const [popup, setPopup] = useState(false);
	const [winner, setWinner] = useState("");
	const [winnerPokemon, setWinnerPokemon] = useState(null);

	// Generate a ramdom pokemon 1
	useEffect(() => {
		const randomPokemon = () => {
			try {
				const pokemonData = pokemon;

				const pokemonIndex = Math.floor(Math.random() * pokemonData.length);
				let pokemonSeleted = pokemon[pokemonIndex];
				setCurrentPokemon(pokemonSeleted);
			} catch (error) {
				console.log(error.message);
			}
		};
		randomPokemon();
	}, [currentPokemon]);

	// Generate random pokemon 2
	useEffect(() => {
		const randomPokemon = () => {
			try {
				const pokemonData = pokemon;

				const pokemonIndex = Math.floor(Math.random() * pokemonData.length);
				let pokemonSeleted = pokemon[pokemonIndex];
				setCurrentPokemon2(pokemonSeleted);
			} catch (error) {
				console.log(error.message);
			}
		};

		randomPokemon();
	}, [currentPokemon2]);

	// Pokeball handler to set the current pokemon
	const ClickHandler = () => {
		setCurrentPokemon();
		setCurrentPokemon2();
	};

	// Compare the score to define the Winner
	useEffect(() => {
		let winnerPokemon = {};

		const winner = () => {
			if (currentPokemon && currentPokemon2) {
				if (currentPokemon.score > currentPokemon2.score) {
					winnerPokemon = currentPokemon;
					setWinner(`Player 1 wins with Pokemon ${winnerPokemon.name} !`);
					setWinnerPokemon(currentPokemon);
				}
				if (currentPokemon.score === currentPokemon2.score) {
					setWinner("Player tie!");
				}
				if (currentPokemon.score < currentPokemon2.score) {
					winnerPokemon = currentPokemon2;
					setWinner(`Player 2 wins with Pokemon ${winnerPokemon.name}`);
					setWinnerPokemon(currentPokemon2);
				}
			}
		};

		winner();
	}, [currentPokemon, currentPokemon2]);

	if (
		currentPokemon === null ||
		currentPokemon === undefined ||
		winnerPokemon === null ||
		winnerPokemon === undefined
	) {
		return <h1>Loading...</h1>;
	}

	return (
		<section className="pokemon">
			<div className="pokemon__header-container">
				<img
					className="pokemon__header"
					src={PokemonTitle}
					alt="pokemon-title"
				/>
			</div>
			<div className="pokemon__popup">
				<Popup trigger={popup} setTrigger={setPopup}>
					<p className="pokemon__popup-winner">{winner}</p>
					<img
						className="pokemon__popup-img"
						src={
							process.env.PUBLIC_URL + "/" + "image" + "/" + winnerPokemon.image
						}
						alt=""
					></img>
				</Popup>
			</div>
			<div className="pokemon__cards-section">
				<div className="pokemon__cards">
					<div className="card-3d-wrap mx-auto">
						<div className="card-3d-wrapper">
							<div className="card-front">
								<div className="pricing-wrap">
									<h3>Player 1</h3>
									<h4 className="mb-5">{currentPokemon.name}</h4>
									<h2 className="mb-2">
										<sup>Type: {currentPokemon.type}</sup> |
										<sup> HP {currentPokemon.score}</sup>
									</h2>
									<p className="mb-4">{currentPokemon.power.title}</p>
									<p className="mb-4">{currentPokemon.power.content}</p>
									<div className="img-wrap img-2">
										<img
											src="https://assets.codepen.io/1462889/sea.png"
											alt=""
										/>
									</div>

									<div className="img-wrap img-2">
										<img
											src={
												process.env.PUBLIC_URL +
												"/" +
												"image" +
												"/" +
												currentPokemon.image
											}
											alt=""
										></img>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="pokemon__pokeball">
						<button
							className="pokemon__pokeball-btn"
							onClick={() => {
								ClickHandler();
								setPopup(true);
							}}
						></button>
					</div>
					<div className="card-3d-wrap mx-auto">
						<div className="card-3d-wrapper">
							<div className="card-front">
								<div className="pricing-wrap">
									<h3>Player 2</h3>
									<h4 className="mb-5">{currentPokemon2.name}</h4>
									<h2 className="mb-2">
										<sup>Type: {currentPokemon2.type}</sup> |
										<sup> HP {currentPokemon2.score}</sup>
									</h2>
									<p className="mb-4">{currentPokemon2.power.title}</p>
									<p className="mb-4">{currentPokemon2.power.content}</p>
									<div className="img-wrap img-2">
										<img
											src="https://assets.codepen.io/1462889/sea.png"
											alt=""
										/>
									</div>

									<div className="img-wrap img-2">
										<img
											src={
												process.env.PUBLIC_URL +
												"/" +
												"image" +
												"/" +
												currentPokemon2.image
											}
											alt=""
										></img>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PokemonGame;
