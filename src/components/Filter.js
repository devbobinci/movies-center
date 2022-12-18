import { useEffect } from "react";
import { BiCameraMovie } from "react-icons/bi";

const Filter = ({ activeGenre, setActiveGenre, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div>
      <h1 className="title">
        Cool movies center <BiCameraMovie />
      </h1>
      <div className="filter-container">
        <button
          className={activeGenre === 0 ? "active" : null}
          onClick={() => setActiveGenre(0)}
        >
          All
        </button>
        <button
          className={activeGenre === 12 ? "active" : null}
          onClick={() => setActiveGenre(12)}
        >
          Adventure
        </button>
        <button
          className={activeGenre === 16 ? "active" : null}
          onClick={() => setActiveGenre(16)}
        >
          Animation
        </button>
        <button
          className={activeGenre === 35 ? "active" : null}
          onClick={() => setActiveGenre(35)}
        >
          Comedy
        </button>
        <button
          className={activeGenre === 28 ? "active" : null}
          onClick={() => setActiveGenre(28)}
        >
          Action
        </button>
      </div>
    </div>
  );
};

export default Filter;
