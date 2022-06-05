import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

import {
  HeaderBody,
  HeaderBackground,
  Header as HeaderContainer,
} from "./styles";

import { PlanetAnimationConfig } from "../../../utils/Animations";
import { BasePlanet } from "./Planets";

export default function Header({ children }) {
  return (
    <HeaderContainer>
      <HeaderBackground>
        <BasePlanet
          name='Earth'
          animationConfig={PlanetAnimationConfig}
          position={{ top: "80%", left: "40%" }}
          size={{ width: "600px", height: "600px" }}
        />
        <BasePlanet
          name='Mars'
          animationConfig={PlanetAnimationConfig}
          position={{ top: "15%", left: "5%" }}
          size={{ width: "100px", height: "100px" }}
        />
      </HeaderBackground>
      <HeaderBody>{children}</HeaderBody>
    </HeaderContainer>
  );
}
