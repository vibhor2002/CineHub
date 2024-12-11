import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    setFavorites(storedFavorites ? JSON.parse(storedFavorites) : []);
  }, []);

  const removeFavorite = (movieId) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <h2 className="trending-h2 animate">My Favorites</h2>
      {favorites.length === 0 ? (
        <p className="no-movie">No Favorite Movies Added.</p>
      ) : (
        <div className="movie-list-container">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              title={movie.title}
              releaseYear={movie.release_date}
              votes={movie.vote_average}
              isFavorite={true}
              onToggleFavorite={() => removeFavorite(movie.id)}
            />
          ))}
        </div>
      )}
    </>
  );
}
