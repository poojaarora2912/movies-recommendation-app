import React from "react";
import "./styles.css";
import { useState } from "react";

const moviesList = {
  fiction: [
    { name: "Marvel Comics", rating: "4/5" },
    { name: "DC Comics", rating: "3.5/5" },
    { name: "Harry Potter", rating: "3.5/5" }
  ],

  romantic: [
    {
      name: "To all the boys",
      rating: "4/5"
    },
    {
      name: "A walk to remember",
      rating: "5/5"
    },
    {
      name: "The kissing booth",
      rating: "4/5"
    }
  ],
  real: [
    {
      name: "The pursuit to happyness",
      rating: "5/5"
    },
    {
      name: "The social network",
      rating: "5/5"
    },
    {
      name: "The theory of everything",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("real");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Movies Recommendation </h1>
      <p>
        <b> Select a movie to know my recommendation! </b>
      </p>

      <div>
        {Object.keys(moviesList).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              color: "black",
              borderRadius: "1rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem",
              backgroundColor: "grey"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesList[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                padding: "1rem",
                width: "80%",
                margin: "1rem 0rem",
                borderRadius: "1 rem"
              }}
            >
              {" "}
              <div> {movie.name} </div>
              <div> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
