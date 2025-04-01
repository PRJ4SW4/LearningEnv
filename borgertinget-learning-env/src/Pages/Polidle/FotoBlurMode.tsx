import React, { useState } from "react";
import Input from "../../components/Polidle/Input/Input";
import styles from "./Polidle.module.css";

interface FotoBlurModeProps {
  imageUrl: string;
  correctPolitiker: string;
  politikerImage: string;
}

const FotoBlurMode: React.FC<FotoBlurModeProps> = ({
  imageUrl,
  correctPolitiker,
  politikerImage,
}) => {
  const [guess, setGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleGuess = (guessInput: any) => {
    const guessName = guessInput.politikker.toLowerCase();
    const correctName = correctPolitiker.toLowerCase();
    const result = guessName === correctName;
    setIsCorrect(result);
    setGuess(guessInput.politikker);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Polidle - Foto Blur Mode</h1>
      <p className={styles.paragraph}>Hvem er denne politiker?</p>
      <img
        src={imageUrl}
        alt="Sløret politiker"
        className={styles.blurredImage}
      />
      <Input onGuess={handleGuess} />
      {isCorrect !== null && (
        <div style={{ display: "inline-block" }}>
          {" "}
          {/* Tilføj inline-style */}
          <div
            className={`guess-result ${isCorrect ? "correct" : "incorrect"}`}
          >
            <img
              src={politikerImage} //TODO: Skal forbindes til DB senere
              alt={guess}
              className={styles.resultImage}
            />
            <span className={styles.resultName}>{guess}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FotoBlurMode;
