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
