import { useEffect, useContext } from "react";

import { CalculateSpeed, CalculateWidth } from "../../utils/CalculateTrivia";
import { animalsSpeed, animalsWidth } from "../../utils/animals";

import { AsteroidContext } from "../LandingPage";
import { CardGroup, ListAnimals, Item } from "./styles";

export default function AsteroidTriviaCard({ triviaType = "speed" }) {
  const [selectedAsteroid] = useContext(AsteroidContext);

  useEffect(() => {
    getUsefulAsteroidData(selectedAsteroid);
  }, [selectedAsteroid]);

  return (
    <CardGroup id='asteroid-trivia-card-component'>
      {triviaType == "speed" ? (
        <>
          <h2>Speed Comparison</h2>
          <ListAnimals>
            {selectedAsteroid &&
              animalsSpeed.map(({ speed, name, icon }) => (
                <Item key={name} emote={icon}>
                  <span id={`speed-trivia-${name}`}>
                    {CalculateSpeed(selectedAsteroid.relative_velocity, speed)}
                  </span>
                  {" times faster than an "}
                  <strong id={`animal-trivia-${name}`}>{name}</strong>
                </Item>
              ))}
          </ListAnimals>
        </>
      ) : (
        <>
          <h2>The asteroid diameter is equal to: </h2>
          <ListAnimals>
            {selectedAsteroid &&
              animalsWidth.map(({ name, width, icon }) => (
                <Item key={name} emote={icon}>
                  <span id={`width-trivia-${name}`}>
                    {CalculateWidth(
                      selectedAsteroid.average_estimated_diameter,
                      width
                    )}
                  </span>
                  {" times the diameter of a "}
                  <strong id={`animal-trivia-${name}`}>{name}</strong>
                </Item>
              ))}
          </ListAnimals>
        </>
      )}
    </CardGroup>
  );
}
