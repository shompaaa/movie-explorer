import { useLoaderData } from "react-router";
import { useState } from "react";
import Movie from "./Movie";
import MovieDetailsModal from "./MovieDetailsModal";

const Movies = () => {
  const movies = useLoaderData();
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleDetails = (movieId) => {
    const movie = movies.find((movie) => movie.id === movieId);
    setSelectedMovie(movie);
  };

  const handleClose = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6 m-4 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            onDetails={handleDetails}
          />
        ))}
      </div>

      <MovieDetailsModal
        movie={selectedMovie}
        onClose={handleClose}
      />
    </>
  );
};

export default Movies;
