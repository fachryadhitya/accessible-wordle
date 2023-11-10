import React from "react";

function GuessInput({ submitGuess }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        submitGuess(e, guess);
        setGuess("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => {
          const value = e.target.value.toUpperCase();
          setGuess(value);
        }}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
      />
    </form>
  );
}

export default GuessInput;
