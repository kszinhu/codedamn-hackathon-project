import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";

import { Body } from "./styles";

import API from "../../services/api";
import GetRandomIntfromInterval from "../../utils/GetRandomIntFromInterval";
import { Animations } from "../../utils/Animations";

import AsteroidCard from "../AsteroidCard";
import Header from "./Header";
import AsteroidTriviaCard from "../AsteroidTriviaCard";

export default function LandingPage() {
  const [selectedAsteroid, setSelectedAsteroid] = useState(null);

  const AsteroidCardMemoized = memo(
    AsteroidCard,
    (prevProps, nextProps) => prevProps.asteroid.id === nextProps.asteroid.id
  );

  const randomAsteroid = (asteroids) =>
    asteroids[GetRandomIntfromInterval(0, asteroids.length - 1)];

  useEffect(() => {
    async function fetchData() {
      await API.get("/neo/browse/",
        {
          params: {
            page: GetRandomIntfromInterval(1, 1469)
          }
        })
        .then(({ data }) => {
          setSelectedAsteroid(randomAsteroid(data.near_earth_objects));

        })
        .catch((err) => {
          console.error(err);
        });
    }

    fetchData();
  }, []);

  return (
    <>
      <Header>
        {selectedAsteroid && (
          <motion.div
            id='asteroid-card-motion'
            whileHover={{ scale: 1.05 }}
            {...Animations.fadeRightIn}
          >
            <AsteroidCardMemoized asteroid={selectedAsteroid} />
          </motion.div>
        )}
      </Header>
      <Body>
        {asteroids && (
          <AsteroidTriviaCard asteroidData={randomAsteroid(asteroids)} triviaType="speed" />
        )}
      </Body>
    </>
  );
}
