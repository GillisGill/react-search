import logo from "./logo.svg";
import "./App.css";

import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import MovieSource from "./api/MovieSource";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await MovieSource.get("/", {
      params: { s: text, i: "tt3896198", apiKey: "a830c069" },
    });
  };
  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">React Search</h2>
        <SearchBar onSearch={onSearch} />
        <CardList></CardList>
      </div>
    </div>
  );
}

export default App;
