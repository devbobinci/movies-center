import { motion } from "framer-motion";

const Movie = ({ movie }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <h2>{movie.title}</h2>
      <div className="movie-img-container">
        <img
          src={"https://images.tmdb.org/t/p/w500" + movie.backdrop_path}
          className="movie-img"
          alt={movie.title}
        />
      </div>
    </motion.div>
  );
};

export default Movie;
