import { useState, useEffect, memo, createContext, useCallback } from "react";
import { motion } from "framer-motion";

import API from "../../services/api";
import GetRandomIntfromInterval from "../../utils/GetRandomIntFromInterval";
import { Animations, getFormattedAsteroid } from "../../utils/";

import { Body, Title, Container, TriviaGroup } from "./styles";

import AsteroidCard from "../AsteroidCard";
import Header from "../Layout/Header";
import AsteroidTriviaCard from "../AsteroidTriviaCard";
import ProjectOverview from "../ProjectOverview";

export const AsteroidContext = createContext();

export default function LandingPage() {
  const [selectedAsteroid, selectAsteroid] = useState(null);

  const AsteroidCardMemoized = memo(
    AsteroidCard,
    (prevProps, nextProps) => prevProps.asteroid.id === nextProps.asteroid.id
  );

  const choseAsteroid = (asteroids) =>
    asteroids[GetRandomIntfromInterval(0, asteroids.length - 1)];

  const getRandomAsteroidFromAPI = useCallback(() => {
    API.get("/neo/browse/", {
      params: {
        page: GetRandomIntfromInterval(1, 1469),
      },
    })
      .then(({ data }) => {
        selectAsteroid(
          getFormattedAsteroid(choseAsteroid(data.near_earth_objects))
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    getRandomAsteroidFromAPI();
  }, []);

  return (
    <AsteroidContext.Provider
      value={[selectedAsteroid, getRandomAsteroidFromAPI]}
    >
      <Container>
        <Header>
          {selectedAsteroid && (
            <motion.div
              id='asteroid-card-motion'
              whileHover={{ scale: 1.05 }}
              {...Animations.fadeRightIn}
            >
              <AsteroidCardMemoized
                id='asteroid-card-component'
                asteroid={selectedAsteroid}
              />
            </motion.div>
          )}
        </Header>
        <Body>
          <Title>Trivia Cards</Title>
          <section>
            {selectedAsteroid && (
              <TriviaGroup>
                <motion.div
                  initial={{ opacity: 0, y: 300 }}
                  whileInView={{
                    opacity: 1,
                    y: 50,
                    transition: {
                      type: "spring",
                      bounce: 0.4,
                      duration: 0.8,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <AsteroidTriviaCard
                    id='speed-trivia-card-component'
                    asteroid={selectedAsteroid}
                    triviaType='speed'
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 300 }}
                  whileInView={{
                    opacity: 1,
                    y: 50,
                    transition: {
                      type: "spring",
                      bounce: 0.4,
                      duration: 0.8,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <AsteroidTriviaCard
                    id='width-trivia-card-component'
                    asteroidData={selectedAsteroid}
                    triviaType='width'
                  />
                </motion.div>
              </TriviaGroup>
            )}
          </section>
          <ProjectOverview />
        </Body>
      </Container>
    </AsteroidContext.Provider>
  );
}
