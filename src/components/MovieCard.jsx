import React, { useState } from "react";
import star from "../assets/star.png";
import def from "../assets/default-poster.png";

const MovieCard = ({
  img,
  title,
  description,
  type,
  releaseYear,
  votes,
  isFavorite,
  onToggleFavorite,
}) => {
  const [animate, setAnimate] = useState(false);

  const imageSrc = img === "https://image.tmdb.org/t/p/w500/null" ? def : img;
  const year = new Date(releaseYear).getFullYear();
  const vote = Math.round(votes * 10) / 10;
  const types = type === "tv" ? "TV" : "Movie";

  const handleToggle = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
    onToggleFavorite();
  };

  return (
    <div className="movie-card-container">
      <img className="movie-img" src={imageSrc} alt={title} />
      <div className="movie-card-details">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-description">{description}</p>
        <div className="movie-star-container">
          <div className="star-container">
            <img className="star" src={star} alt="" />
            <p className="movie-average-vote">{vote}</p>
          </div>

          <div>
            <p className="media-type">{types}</p>
          </div>
        </div>
        <p className="movie-release-year"> Release Year: {year}</p>
        <button
          className={`favorite-btn ${animate ? "animate" : ""}`}
          onClick={handleToggle}
        >
          {isFavorite ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <i className="fa-solid fa-plus"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
