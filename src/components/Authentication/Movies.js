import React,{useState, useEffect} from "react";
import classes from "./Movies.module.css"

const Movies = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("https://hoblist.com/api/movieList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting",
          }),
        });
        const data = await res.json();
        // console.log(data.result);
        setMovies(data.result)
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
  console.log(movies,"movies");
  return (
    <div className={classes.movieBox}>
      {movies && movies.map(movie => <div key={movie._id}>
        {movie.title}
      </div>)}
    </div>
  )
};

export default Movies;
