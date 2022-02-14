import React from "react";
import StarRating from "./StarRating";

// Card component that recieves movie item
const Card = (props) => {
  const { movie } = props;
  // console.log(props);

  return (
    <div className="resultCard">
      <figure className="PosterImg">
        <img src={movie.Poster} alt={movie.Title} />
      </figure>
      <h4>{movie.Title}</h4>
      <span>{movie.Year}</span>
      <StarRating />

      <button className="ClickButton">
        <label>Click</label>
      </button>
    </div>
  );
};

export default Card;
