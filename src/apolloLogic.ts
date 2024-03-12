import {
  ApolloClient,
  InMemoryCache,
  createQueryPreloader,
} from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: `http://${import.meta.env.VITE_STRAPI_DOMAIN}:1337/graphql`,
  cache: new InMemoryCache(),
});

export const queryPreloader = createQueryPreloader(apolloClient);
