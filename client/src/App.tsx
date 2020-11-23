import React from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";

import theme from "./utils/theme";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
