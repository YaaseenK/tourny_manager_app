import { gql } from '@apollo/client';

// Export all GQL queries 

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      IGN {
        _id
        Player {
          _id
          name
          IGN
        }
      }
    }
  }
`;
