import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
  const [j, setJ] = useState([])
  const {id} = useParams();
  console.log(id);
  const getMovies = async() => {
    const json = await (await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
      setJ(json.data.movie.url);
  }
  useEffect(() => {
    getMovies();
  }, [])
  return (
    <a href={j}>{j}</a>
  )
}

export default Detail;