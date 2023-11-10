import React from "react";

function Banner({ result, answer, guessCount }) {
  return (
    <div className={`banner ${result}`}>
      {result === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{guessCount} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
