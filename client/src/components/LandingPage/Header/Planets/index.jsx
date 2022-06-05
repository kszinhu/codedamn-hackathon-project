import { BasePlanet as PlanetPattern } from "./styles";
import { motion } from "framer-motion";

import { SpacePlanets } from "../../../../config/assets";

export const BasePlanet = ({ name, animationConfig, position, size }) => {
  return (
    <motion.div
      drag
      {...animationConfig}
      style={{ position: "absolute", ...position }}
    >
      <PlanetPattern image={SpacePlanets[name].image} style={{ ...size }} />
    </motion.div>
  );
};
