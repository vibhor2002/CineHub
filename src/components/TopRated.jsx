import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import MovieCard from "./MovieCard";

const apiKey = process.env.REACT_APP_API_KEY;

export default function MoviesList() {
  const { query } = useOutletContext();
  const [moviesData, setMoviesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const endpoint = query
          ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${currentPage}`
          : `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${currentPage}`;

        const response = await fetch(endpoint);
        const data = await response.json();
        if (currentPage === 1) {
          setMoviesData(data.results);
        } else {
          setMoviesData((prevMoviesData) => [
            ...prevMoviesData,
            ...data.results,
          ]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query, currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === movie.id)) {
        return prevFavorites.filter((fav) => fav.id !== movie.id);
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  return (
    <>
      <h2 className="trending-h2 animate">Top Rated</h2>
      {moviesData.length === 0 && !loading ? (
        <p className="no-movie">Your search did not have any matches.</p>
      ) : (
        <div className="movie-list-container">
          {moviesData.map((movie) => (
            <MovieCard
              key={movie.id}
              img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              title={movie.title}
              releaseYear={movie.release_date}
              votes={movie.vote_average}
              isFavorite={favorites.some((fav) => fav.id === movie.id)}
              onToggleFavorite={() => toggleFavorite(movie)}
            />
          ))}
        </div>
      )}
      {loading && <p>Loading more movies...</p>}
    </>
  );
}
