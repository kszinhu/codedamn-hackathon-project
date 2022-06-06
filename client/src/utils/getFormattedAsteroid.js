export const getFormattedAsteroid = (asteroid) => {
  const {
    id,
    name,
    estimated_diameter,
    is_potentially_hazardous_asteroid,
    close_approach_data,
    orbital_data,
  } = asteroid;

  const estimated_diameter_min =
    estimated_diameter.kilometers.estimated_diameter_min;
  const estimated_diameter_max =
    estimated_diameter.kilometers.estimated_diameter_max;

  const last_approach_data =
    close_approach_data[close_approach_data.length - 1];

  const miss_distance = last_approach_data.miss_distance;

  const randomFormattedAsteroid = {
    id,
    name,
    average_estimated_diameter:
      ((estimated_diameter_max + estimated_diameter_min) / 2) * 1000,
    is_potentially_hazardous_asteroid,
    relative_velocity: last_approach_data.relative_velocity.kilometers_per_hour,
    last_seen: orbital_data.last_observation_date,
    first_seen: orbital_data.first_observation_date,
    orbiting_body: last_approach_data.orbiting_body,
    miss_distance: {
      astronomical: miss_distance.astronomical,
      lunar: miss_distance.lunar,
      kilometers: miss_distance.kilometers,
    },
  };

  return randomFormattedAsteroid;
};
