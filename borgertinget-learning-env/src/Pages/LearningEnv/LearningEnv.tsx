import React from "react";
import { useParams } from "react-router-dom"; // Importér useParams-hook

const LearningEnv: React.FC = () => {
  const { id } = useParams(); // Hent produkt-id fra URL

  return (
    <div>
      <h1>Læringsområde</h1>
    </div>
  );
};

export default LearningEnv;
