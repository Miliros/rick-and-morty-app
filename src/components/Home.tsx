import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterdCard";
import { Character } from "../types";

// Styled component para el contenedor principal
const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

// Styled component para el contenedor principal del paginado
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  span {
    font-weight: 600;
    font-size: 14px;
  }
`;

// Styled component para el boton paginado
const PaginationButton = styled.button`
  background-color: #a0e7a0;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 8px;
  margin: 0 15px;
  cursor: pointer;
  font-size: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &:disabled {
    background-color: #d3d3d3; // Color para botones deshabilitados
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.9; // Efecto hover
  }
}`;
const ErrorContainer = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  border-radius: 8px;
  text-align: center;
`;

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 4; // Fijo el total de paginas en 4
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async (page: number) => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        if (!response.ok) {
          throw new Error("Error al cargar personajes");
        }
        const data = await response.json();
        setCharacters(data.results);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchCharacters(currentPage);
  }, [currentPage]);

  // Funcion para ir a la siguiente página
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Funcion para ir a la página anterior
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <AppContainer>
        {error ? (
          <ErrorContainer>Error: {error}</ErrorContainer>
        ) : (
          characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              color={character.status === "Alive" ? "#a0e7a0" : "#e7a0a0"}
            />
          ))
        )}
      </AppContainer>

      {!error && (
        <PaginationContainer>
          <PaginationButton
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Prev
          </PaginationButton>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <PaginationButton
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </PaginationButton>
        </PaginationContainer>
      )}
    </>
  );
};

export default Home;
