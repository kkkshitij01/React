import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import "./style.css";
export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      <h1>Star-Rating</h1>
      <span>
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              className={index <= (hover || rating) ? "active" : "inactive"}
              key={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => {
                handleMouseEnter(index);
              }}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </span>
    </div>
  );
}
