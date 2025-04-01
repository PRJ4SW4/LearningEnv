import React from "react";
import Infobox from "../../components/Polidle/Infobox/Infobox";
import Input from "../../components/Polidle/Input/Input";
import styles from "./Polidle.module.css";

const Polidle: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Polidle</h1>
      <h2 className={styles.subheading}>Velkommen til Dagens Polidle!</h2>
      <p className={styles.paragraph}>Prøv og gætte dagens politiker</p>
      <Input />
      <Infobox /> {/* Brug Infobox-komponenten */}
      {/* ... (Inputfelter til brugerens gæt og liste over tidligere gæt) */}
    </div>
  );
};

export default Polidle;
