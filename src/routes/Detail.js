import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>{movie.title_long}</h1>
      <img src={movie.large_cover_image} />
      <p>{movie.description_full}</p>
    </div>
  );
}

export default Detail;
