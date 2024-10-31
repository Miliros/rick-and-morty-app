import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CharacterCard from "./components/CharacterdCard";
import { Character } from "./types";
import NavBar from "./components/NavBar";

// Styled component para el contenedor principal
const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

const App: React.FC = () => {
  //uso useState para guardar los personajes
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null); // Para manejar errores

  // Uso del hook useEffect para llamar a la API
  // try catch para manejo de errores
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        if (!response.ok) {
          throw new Error("error");
        }
        const data = await response.json();
        setCharacters(data.results);
      } catch (error: any) {
        setError(error.message); // Guardar el mensaje de error en el estado
        console.error(error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <>
      <NavBar />
      <AppContainer>
        {error && <div>Error: {error}</div>}
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            color={character.status === "Alive" ? "#a0e7a0" : "#e7a0a0"} // Cambio de CSS dinamicamente segun el status
          />
        ))}
      </AppContainer>
    </>
  );
};

export default App;
