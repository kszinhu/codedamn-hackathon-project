import { useContext } from "react";
import { MediaQuery, useMantineTheme } from "@mantine/core";

import {
  BooleanValue,
  CardContainer,
  CardGroup,
  CardSection,
  CardSectionGroup,
  CardTitle,
  InformationItem,
  Button,
} from "./styles";

import Asteroid from "../../assets/img/Asteroid.svg";

import { SpaceIcons } from "../../config/assets";
import { Commify } from "../../utils/";

import { AsteroidContext } from "../LandingPage";

export default function AsteroidCard() {
  const [selectedAsteroid, getRandomAsteroidFromAPI] =
    useContext(AsteroidContext);
  const theme = useMantineTheme();
  
  const {
    id,
    name,
    is_potentially_hazardous_asteroid: isHazardous,
    close_approach_data: [
      {
        relative_velocity: { kilometers_per_hour },
        miss_distance: { astronomical, kilometers, lunar },
      },
    ],
    orbital_data: { first_observation_date: first_seen },
  } = selectedAsteroid;

  const orbiting_body =
    selectedAsteroid.close_approach_data[0].orbiting_body ?? "No orbits";

  return (
    <CardContainer>
      <CardGroup>
        <MediaQuery
          smallerThan={768}
          styles={{ display: "none", "&>*": { display: "none" } }}
        >
          <CardSection padding='0'>
            <span id='asteroid-id'>#{id}</span>
            <img src={Asteroid} alt='Asteroid' width={250} />
            <span aria-label='Celestial body that the asteroid is orbiting'>
              <img
                src={
                  SpaceIcons[orbiting_body]?.image ?? SpaceIcons.Default.image
                }
                width={30}
                alt='Celestial body that the asteroid is orbiting'
              />
              <span id='orbit-body'>{` Orbiting body:  ${orbiting_body}`}</span>
            </span>
          </CardSection>
        </MediaQuery>
        <CardSection>
          <div>
            <CardTitle>{name}</CardTitle>
            <MediaQuery largerThan={768} styles={{ display: "none" }}>
              <span id='asteroid-id'>#{id}</span>
            </MediaQuery>
          </div>
          <CardSection>
            <CardSectionGroup>
              <div className='container'>
                <InformationItem>
                  <span className='emoji'>🗓️</span>
                  <div>
                    <h3>First Seen:</h3>
                    <span>{first_seen}</span>
                  </div>
                </InformationItem>
                <InformationItem>
                  <span className='emoji'>{isHazardous ? "⚠️" : "✅"}</span>
                  <div>
                    <h3>Is hazardous:</h3>
                    <BooleanValue value={isHazardous === "Yes" ? true : false}>
                      {isHazardous ? "Yes :(" : "No :)"}
                    </BooleanValue>
                  </div>
                </InformationItem>
                <InformationItem>
                  <span className='emoji'>⏱️</span>
                  <div>
                    <h3>Relative Velocity:</h3>
                    <span>
                      {Number(kilometers_per_hour).toPrecision(4)} km/h
                    </span>
                  </div>
                </InformationItem>
              </div>
            </CardSectionGroup>
            <CardSectionGroup>
              <div className='container'>
                <h3>Missed distance:</h3>
                <InformationItem>
                  <img
                    src={SpaceIcons["Sun"]?.image}
                    width={40}
                    alt='Is Danger?'
                  />
                  <div>
                    <h3>Astronomical:</h3>
                    <span>
                      {Number(Commify(astronomical)).toPrecision(4)} ua
                    </span>
                  </div>
                </InformationItem>
                <InformationItem>
                  <img
                    src={SpaceIcons["Moon"]?.image}
                    width={40}
                    alt='Is Danger?'
                  />
                  <div>
                    <h3>lunar:</h3>
                    <span>{Number(Commify(lunar)).toPrecision(4)} una</span>
                  </div>
                </InformationItem>
                <InformationItem>
                  <img
                    src={SpaceIcons["Earth"]?.image}
                    width={40}
                    alt='Distance units in kilometers'
                  />
                  <div>
                    <h3>kilometers:</h3>
                    <span>{Commify(Number(kilometers).toPrecision(4))} km</span>
                  </div>
                </InformationItem>
              </div>
            </CardSectionGroup>
          </CardSection>
        </CardSection>
      </CardGroup>
      <Button
        color='#661d78'
        py={15}
        onClick={() => getRandomAsteroidFromAPI()}
      >
        Check another asteroid
      </Button>
    </CardContainer>
  );
}
