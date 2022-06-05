import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCallback } from 'react';

import LandingPage from "./components/LandingPage";
import AsteroidCard from "./components/AsteroidCard";

const baseURL =
  "https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=XbOL6eVBSgeONZepEUOQhgEODrnISyPUHht7iTsC";

function App() {
  function GetRandomPlanet() {
    console.log("planeta aleatório");
  }

    let random = Math.floor(Math.random() * meteorArraySize + 1);
    
    console.warn(random);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(baseURL)
        .then(({ data }) => {
          setMeteor(
            data.near_earth_objects[Object.keys(data.near_earth_objects)[0]]
          );
          console.log(data.near_earth_objects[0]);
          GetRandomPlanet();
        })
        .catch((err) => console.error(err));
    };

    fetchData();
  }, []);

  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
