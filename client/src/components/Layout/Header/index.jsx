import { useOs } from "@mantine/hooks";

import { headerAnimationConfig } from "../../../config/animations";

import {
  HeaderBody,
  HeaderBackground,
  Header as HeaderContainer,
} from "./styles";
import { BasePlanet } from "./Planets";

export default function Header({ children }) {
  const CurrentOs = useOs(),
    mobilesOs = ["ios", "android"];

  return (
    <HeaderContainer>
      <HeaderBackground>
        <BasePlanet
          name='Earth'
          animationConfig={headerAnimationConfig.planet}
          position={{ top: "80%", left: "40%" }}
          size={{ width: "600px", height: "600px" }}
        />
        <BasePlanet
          name='Mars'
          animationConfig={headerAnimationConfig.planet}
          position={{ top: "15%", left: "5%" }}
          size={{ width: "100px", height: "100px" }}
        />
        {[...Array(10)].map((_, index) => {
          const randomPosition = () =>
            `${Math.floor(Math.random() * 100 + 5).toString()}%`;
          const randomSize = `${Math.floor(
            Math.random() * 100 + 1
          ).toString()}px`;

          return (
            <BasePlanet
              key={`planet-${index}`}
              name='AnotherPlanet'
              animationConfig={headerAnimationConfig.anotherPlanet}
              position={{ top: randomPosition(), left: randomPosition() }}
              size={{ width: randomSize, height: randomSize }}
            />
          );
        })}
        {[...Array(CurrentOs.includes(mobilesOs) ? 10 : 30)].map((_, index) => {
          const randomPosition = () =>
            `${Math.floor(Math.random() * 100 + 5).toString()}%`;
          const rotateNumber = Math.floor(Math.random() * 360);

          return (
            <BasePlanet
              key={`asteroid-${index}`}
              name='FlameAsteroid'
              animationConfig={{
                ...headerAnimationConfig.asteroid,
                initial: { rotate: rotateNumber },
                animate: {
                  x: rotateNumber < 180 + 45 ? "-1000px" : "1000px",
                  y: rotateNumber > 180 + 45 ? "-1000px" : "1000px",
                },
              }}
              position={{ top: randomPosition(), left: randomPosition() }}
              size={{ width: "20px", height: "20px" }}
            />
          );
        })}
      </HeaderBackground>
      <HeaderBody>{children}</HeaderBody>
    </HeaderContainer>
  );
}
