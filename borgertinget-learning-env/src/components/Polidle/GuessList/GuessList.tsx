import React from "react";
import GuessItem from "./GuessItem";
import "./GuessList.css";

interface Guess {
  politikker: string;
  køn: string;
  parti: string;
  alder: number;
  region: string;
  uddannelse: string;
}

interface GuessListProps {
  guesses: Guess[];
}

const GuessList: React.FC<GuessListProps> = ({ guesses }) => {
  return (
    <div className="guess-list">
      <div className="header">
        <div className="category">Politiker</div>
        <div className="category">Køn</div>
        <div className="category">Parti</div>
        <div className="category">Alder</div>
        <div className="category">Region</div>
        <div className="category">Uddannelse</div>
      </div>
      {guesses.map((guess, index) => (
        <GuessItem key={index} guess={guess} />
      ))}
    </div>
  );
};

export default GuessList;
