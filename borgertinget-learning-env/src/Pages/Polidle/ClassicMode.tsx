import React, { useState } from "react";
import Infobox from "../../components/Polidle/Infobox/Infobox";
import Input from "../../components/Polidle/Input/Input";
import GuessList from "../../components/Polidle/GuessList/GuessList";
import styles from "./Polidle.module.css";

const ClassicMode: React.FC = () => {
  const [guesses, setGuesses] = useState([
    {
      politikker: "Mette Frederiksen",
      køn: "Kvinde",
      parti: "Socialdemokratiet",
      alder: 48,
      region: "Hovedstaden",
      uddannelse: "Cand.jur",
    },
    {
      politikker: "Lars Løkke",
      køn: "Mand",
      parti: "Moderaterne",
      alder: 50,
      region: "Hovedstaden",
      uddannelse: "Cand.jur",
    },
    // ... flere gæt ...
  ]);

  const correctAnswers = {
    politikker: "Mette Frederiksen",
    køn: "Kvinde",
    parti: "Socialdemokratiet",
    alder: 48,
    region: "Hovedstaden",
    uddannelse: "Cand.jur",
  };

  const handleGuess = (guess: any) => {
    setGuesses([...guesses, guess]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Polidle</h1>
      <h2 className={styles.subheading}>Velkommen til Dagens Polidle!</h2>
      <p className={styles.paragraph}>Prøv og gætte dagens politiker</p>
      <Input onGuess={handleGuess} />
      <GuessList guesses={guesses} correctAnswers={correctAnswers} />
      <Infobox />
    </div>
  );
};

export default ClassicMode;
