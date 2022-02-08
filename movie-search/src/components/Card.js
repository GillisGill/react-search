import React from "react";

function Card(props) {
  const { movie } = props;

  return (
    <div className="resultCard">
      <figure className="PosterImg">
        <img src={movie.Poster} alt={movie.Title} />
      </figure>
      <h4>{movie.Title}</h4>
      <span>{movie.Year}</span>

      <button className="ClickButton">
        <label>Click</label>
      </button>
    </div>
  );
}

export default Card;
