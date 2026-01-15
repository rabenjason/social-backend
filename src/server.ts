import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import { typeDefs } from "./schema.ts";
import { inscription, connexion } from "./auth.ts";

dotenv.config();

const resolvers = {
  Query: {
    _health: () => "ok",
  },
  Mutation: {
    inscription: (_: any, args: any) =>
      inscription(args.email, args.motDePasse),

    connexion: (_: any, args: any) =>
      connexion(args.email, args.motDePasse),
  },
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(() => {
  console.log("🚀 Backend prêt : http://localhost:4000");
});
