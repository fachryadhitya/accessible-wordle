import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guess from "../Guess/Guess";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameResult, setGameResult] = React.useState("");

  const submitGuess = (event, guess) => {
    event.preventDefault();

    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) return;

    const newGuess = {
      id: crypto.randomUUID(),
      text: guess,
      result: checkGuess(guess, answer),
    };
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (
      newGuess.result
        .map((item) => item.status)
        .every((item) => item === "correct")
    ) {
      setGameResult("happy");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameResult("sad");
    }
  };

  return (
    <>
      <Guess guesses={guesses} />
      <GuessInput submitGuess={submitGuess} />
      {gameResult && (
        <Banner
          result={gameResult}
          answer={answer}
          guessCount={guesses.length}
        />
      )}
    </>
  );
}

export default Game;
