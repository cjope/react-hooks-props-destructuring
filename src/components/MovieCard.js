import { getElementError } from "@testing-library/react";
import React from "react";

//using props
// function MovieCard(props){
//   return (
//   <div className="movie-card">
//     <img src={props.posterSrc} alt={props.title} />
//     <h2>{props.title}</h2>
//     <small>{props.genres.join("! ")}!</small>
//   </div>
//   )
// }

//using destructured props
// function MovieCard({ title, posterSrc, genres }) {
//   return (
//     <div className="movie-card">
//       <img src={posterSrc} alt={title} />
//       <h2>{title}</h2>
//       <small>{genres.join(", ")}</small>
//     </div>
//   );
// }


//using destructured props with default values
function MovieCard({
  title,
  posterSrc = "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg",
  genres,
}) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join("! ")}!</small>
    </div>
  );
}



export default MovieCard;
