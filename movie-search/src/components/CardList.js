import React from "react";
import Card from "./Card";

// Receives results from get and maps to card components
const CardList = ({ results }) => {
  let data = [];
  if (results.data) {
    data = results.data.Search || [];
  }
  //console.log(data);

  return (
    <div className="result">
      {data.map((item) => (
        <Card key={item.imdbID} movie={item} />
      ))}
    </div>
  );
};

export default CardList;
