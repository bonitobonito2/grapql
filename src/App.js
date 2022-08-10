import Search from "./components/Search";
import { InMemoryCache } from "@apollo/client";
import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com/",
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Search />
      </div>
      ;
    </ApolloProvider>
  );
}

export default App;
