import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guess({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i, index) => {
        const guess = guesses[i];

        return (
          <p key={index} className="guess">
            {guess ? (
              <>
                {guess?.result?.map(({ letter, status }, index) => (
                  <span className={`cell ${status}`} key={index}>
                    {letter}
                  </span>
                ))}
              </>
            ) : (
              <>
                {range(0, 5).map((i, index) => (
                  <span className="cell" key={index}></span>
                ))}
              </>
            )}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;
