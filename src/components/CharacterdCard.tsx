import React from "react";
import styled from "styled-components";
import { Character } from "../types";

//tipado
interface CharacterCardProps {
  character: Character;
  color?: string;
}
// styled components a el div que contiene las props
const PropsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 9px;
  max-width: 16vw;
`;
// styled components a las props
const CardProp = styled.h2`
  font-family: "Cinzel", serif; // Fuente
  display: flex; // Alinear en fila
  font-size: 15px; // Tamaño de fuente
  margin: 5px;
`;
// styled componentes a mi componente principal de Card
// renderizado segun lo que tiene cards por props

const Card = styled.div<{ color?: string; statusColor?: string }>`
  display: flex;
  flex-direction: column;
  flex: 0 0 18%; //
  align-items: center;
  background-color: ${(props) => props.color || "#ffffff"};
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  margin: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    object-fit: cover;
  }

  h3 {
    font-size: 19px;
    margin: 10px 0;
  }
  p {
    margin: 5px;
    font-size: 14px;
    letter-spacing: 1px;
    color: ${(props) => props.statusColor || "#FFFFFF"};
  }
`;

const CharacterCard: React.FC<CharacterCardProps> = ({ character, color }) => {
  //decido el color de la props status basado en el status del personaje

  const statusColor = character.status === "unknown" ? "#FF0000" : "#FFFFFF";
  return (
    <Card color={color} statusColor={statusColor}>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <PropsContainer>
        <CardProp>{character.species}</CardProp>
        <CardProp>|</CardProp>
        <CardProp>{character.gender}</CardProp>
      </PropsContainer>
      <p>Status: {character.status}</p>
    </Card>
  );
};

export default CharacterCard;
