import { useLoaderData } from "react-router";
import Movie from "./Movie";

const Movies = () => {
    const movies = useLoaderData()
    return (
         <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 m-4">
        {movies.map((movie) => (
          <Movie key={movies.id} movie={movie}></Movie>
        ))}
      </div>
    );
};

export default Movies;