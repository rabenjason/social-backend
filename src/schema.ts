export const typeDefs = `#graphql
  type Utilisateur {
    id: ID!
    email: String!
  }

  type AuthPayload {
    token: String!
    utilisateur: Utilisateur!
  }

  type Query {
    _health: String
  }

  type Mutation {
    inscription(email: String!, motDePasse: String!): AuthPayload!
    connexion(email: String!, motDePasse: String!): AuthPayload!
  }
`;
