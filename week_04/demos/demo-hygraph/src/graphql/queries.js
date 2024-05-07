const { gql } = require("@apollo/client");

export const GET_TODO = gql`
query Todos {
    todos {
      isDone
      title
    }
  }
`;

  