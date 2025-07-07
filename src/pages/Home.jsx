

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
import { CharacterCards } from "../components/CharacterCards"
import { PlanetCards } from "../components/PlanetsCards"
import { getCharacters } from "../services/starwarsServices.js";
import { getPlanets } from "../services/starwarsServices.js";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getCharacters()
			.then((data) => dispatch({ type: "update_characters", payload: data }))
		getPlanets()
			.then((data) => dispatch({ type: "update_planets", payload: data }))
	}, []);

	console.log(store.characters);
	console.log(store.planets);
	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<div className="d-flex overflow-auto gap-3 p-3">
				{store.characters.map((char) => (
					<CharacterCards key={char.uid} id={char.uid} name={char.name} />
				))}
			</div>
			<h1>Planets</h1>
			<div className="d-flex overflow-auto gap-3 p-3">
				{store.planets.map((planet) => (
					<CharacterCards key={planet.uid} id={planet.uid} name={planet.name} />
				))}
			</div>
		</div>
	);
}; 