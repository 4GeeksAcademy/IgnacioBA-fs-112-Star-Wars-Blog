import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCharacterInfo } from "../services/starwarsServices.js";
import { getPlanetInfo } from "../services/starwarsServices.js";


export const MoreInfo = () => {
  const { type, id } = useParams();
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacterInfo(type, id);
      setInfo(data);
    };
    fetchData();
  }, [type, id]);

  useEffect(() => {
    const fetchPlanet = async () => {
      if (type === "character" && info?.properties?.homeworld) {
        const planetName = await getPlanetInfo(info.properties.homeworld);
        setPlanet(planetName);
      }
    };
    fetchPlanet();
  }, [info, type]);

  if (error) return <p>{error}</p>;
  if (!info) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{info.properties.name}</h2>
      {type === "planets" ? (
        <p>
          {info.properties.name} is a planet with a diameter of {info.properties.diameter} km. It has a climate of {info.properties.climate} 
          and terrain described as {info.properties.terrain}. The planet has a population of {info.properties.population} and rotates once every 
          {info.properties.rotation_period} hours.
        </p>
      ) : (
        <>
          <p>
            {info.properties.name} was born in the year {info.properties.birth_year} and has {info.properties.eye_color} eyes.{" "}
            This character weighs {info.properties.mass}kg and is {info.properties.height}cm tall.{" "}
            They have {info.properties.skin_color} skin and {info.properties.hair_color === "n/a" ? "no hair" : info.properties.hair_color + " hair"}.
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
        </>
      )}
    </div>
  );
};