import React from "react";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import CardContainer from "./Components/CardContainer/CardContainer";
import AppBarComponent from "./Components/AppBar/AppBar";

const errorLink = onError(({ graphqlErrors }: any) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }: any) => {
      return alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AppBarComponent />
      <CardContainer />
    </ApolloProvider>
  );
}

export default App;
