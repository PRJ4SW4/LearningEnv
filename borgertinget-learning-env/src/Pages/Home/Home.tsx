import React from "react";

const Home: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  };

  const contentStyle: React.CSSProperties = {
    height: "100%", // Tilføj denne linje
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1>Velkommen til startsiden!</h1>
        <p>Dette er indholdet på din startside.</p>
      </div>
    </div>
  );
};

export default Home;
