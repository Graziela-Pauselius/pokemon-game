<div class="section over-hide">
	<div class="container">
		<div class="row full-height justify-content-center">
			<div class="col-12 text-center align-self-center py-5">
				<div class="section text-center py-5 py-md-0">
					<input class="pricing" type="checkbox" id="pricing" name="pricing" />
					<label for="pricing">
						<span class="block-diff">
							kayaking<span class="float-right">camping</span>
						</span>
					</label>
					<div class="card-3d-wrap mx-auto">
						<div class="card-3d-wrapper">
							<div class="card-front"></div>
							<div class="card-back">
								<div className="content-wrap">
									<h1>Player 1</h1>
									<h2 className="pokemon__name mb-5">{currentPokemon.name}</h2>
									<img
										className="pokemon__img image-wrap img-1"
										src={
											process.env.PUBLIC_URL +
											"/" +
											"image" +
											"/" +
											currentPokemon.image
										}
									/>
									<h3 className="pokemon__score mb-2">
										<sup>Type: {currentPokemon.type}</sup> |
										<sup>HP {currentPokemon.score}</sup>
									</h3>
									<h3 className="pokemon__info mb-2">
										{currentPokemon.power.title}
									</h3>
									<p className="pokemon__info">
										{currentPokemon.power.content}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>;


	{/*<section className="pokemon">
			<h1 className="pokemon__header">POKEMON BATTLE</h1>
			<div className="pokemon__winner">
				{winner} <img className="pokemon__ball" src={pokeball} />
			</div>
			<div className="pokemon__section">
				<div className="pokemon__container">
					<div className="card-3d-wrap">
						<div className="card-3d-wrapper">
							<div className="card-front"></div>
							<div className="card-back">
								<div className="content-wrap">
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
									<h3 className="pokemon__info">
										{currentPokemon.power.title}
									</h3>
									<p className="pokemon__info">
										{currentPokemon.power.content}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/*<div className="pokemon__pokeball">
						<button
							className="pokemon__pokeball-btn"
							onClick={ClickHandler}
						></button>
								</div>*/}
					{/*<div className="pokemon__card">
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
						</div>*/}
                        </div>
                        </div>
                                </section> */}



// okay <div class="section over-hide">
			<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section text-center py-5 py-md-0">
						<input
							class="pokemon"
							type="checkbox"
							id="pokemon"
							name="pokemon"
						/>
						<label for="pokemon">
							<span class="block-diff">
								Play<span class="float-right">Pokemon</span>
							</span>
						</label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div className="content-wrap">
										<h1>Player 1</h1>
										<h2 className="pokemon__name mb-5">
											{currentPokemon.name}
										</h2>

										<h3 className="pokemon__score mb-2">
											<sup>Type: {currentPokemon.type}</sup> |
											<sup>HP {currentPokemon.score}</sup>
										</h3>
										<h3 className="pokemon__info mb-2">
											{currentPokemon.power.title}
										</h3>
										<p className="pokemon__info">
											{currentPokemon.power.content}
										</p>
									</div>
								</div>
								<div class="card-back">
									<div className="content-wrap">
										<img
											className="pokemon__img image-wrap img-1"
											src={
												process.env.PUBLIC_URL +
												"/" +
												"image" +
												"/" +
												currentPokemon.image
											}
										/>
										<h2 className="pokemon__name mb-5">
											{currentPokemon.name}
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
