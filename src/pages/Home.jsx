

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
import { Cards } from "../components/Cards.jsx"

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
					<Cards key={char.uid} uid={char.uid}  name={char.name} type="people" />
				))}
			</div>
			<h1>Planets</h1>
			<div className="d-flex overflow-auto gap-3 p-3">
				{store.planets.map((planet) => (
					<Cards key={planet.uid} uid={planet.uid}  name={planet.name} type="planets" />
				))}
			</div>
		</div>
	);
}; 