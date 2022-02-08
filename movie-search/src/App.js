import "./App.css";

import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import MovieSource from "./api/MovieSource";
import { useState } from "react";

// Performs a get request to the api, waits for the result and passes the result to the card list component
function App() {
  const [state, setState] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await MovieSource.get("/", {
      params: { s: text, apiKey: "a830c069" },
    });
    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };
  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="AppTitle">Movie Search</h2>
        <SearchBar onSearch={onSearch} />
        <CardList results={state.results}></CardList>
      </div>
    </div>
  );
}

export default App;
