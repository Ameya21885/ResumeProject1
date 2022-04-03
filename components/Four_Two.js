import React, { useState } from "react";

export default function Four_Two() {
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
      <div>
        <div>Four_Two</div>
        {movies.map((movie) => (
          <li>{movie.name}</li>
        ))}
        {movies.map((movie) => (
          <li>{movie.proce}</li>
        ))}
        {movies.map((movie) => (
          <li>{movie.id}</li>
        ))}
      </div>
    </>
  );
}
