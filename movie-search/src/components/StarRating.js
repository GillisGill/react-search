import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

// Determine what star to display, based on if the star's rating value matches or is below the hovered over or clicked on star
const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        const starE = (
          <FaRegStar
            className="star"
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          />
        );
        const starF = (
          <FaStar
            className="star"
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          />
        );
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            {ratingValue <= (hover || rating) ? starF : starE}
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
