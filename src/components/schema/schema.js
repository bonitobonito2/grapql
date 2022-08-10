import { gql } from "@apollo/client/core";

export const getWather = gql`
  query getCityByName($name: String!, $config: ConfigInput) {
    getCityByName(name: $name, config: $config) {
      name
      country
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
      }
    }
  }
`;
