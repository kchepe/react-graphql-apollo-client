import { gql } from "@apollo/client";

export const getAllCharacters = gql`
  query {
    characters {
      results {
        id
        name
        image
        species
        type
        status
        location {
          name
        }
        gender
        origin {
          name
        }
      }
    }
  }
`;
