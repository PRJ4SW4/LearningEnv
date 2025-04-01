import React from "react";
import "./GuessItem.css";

interface Guess {
  politikker: string;
  køn: string;
  parti: string;
  alder: number;
  region: string;
  uddannelse: string;
}

interface GuessItemProps {
  guess: Guess;
}

const GuessItem: React.FC<GuessItemProps> = ({ guess }) => {
  return (
    <div className="guess-item">
      <div className="guess-data">{guess.politikker}</div>
      <div className="guess-data">{guess.køn}</div>
      <div className="guess-data">{guess.parti}</div>
      <div className="guess-data">{guess.alder}</div>
      <div className="guess-data">{guess.region}</div>
      <div className="guess-data">{guess.uddannelse}</div>
    </div>
  );
};

export default GuessItem;
