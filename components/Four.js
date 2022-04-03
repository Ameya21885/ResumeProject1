import React, { useState } from "react";
import Four_One from "./Four_One";

export default function Four() {
  const [movies, setMovies] = useState([
    {
      name: "Harry Podtter",
      proce: "$10",
      id: 23124,
    },
    {
      name: "Game of Thrones",
      proce: "$10",
      id: 2566124,
    },
    {
      name: "Intception",
      proce: "$10",
      id: 23524,
    },
  ]);

  return (
    <>
      <div>Four</div>
      <div>
        {movies.map((movie) => (
          <h4>
            <Four_One name={movie.name} price={movie.proce} key={movie.id} />
          </h4>
        ))}
      </div>
    </>
  );
}
