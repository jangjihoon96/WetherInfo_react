import React from "react";
import { Title } from "../components/Title";
import { Container } from "../components/Container";
import { Link } from "react-router-dom";

export const Game: React.FC = () => {
  return (
    <Container>
      <Title>미니 게임</Title>
      <ul>
        <li>
          <Link to="/game/quiz">퀴즈 게임</Link>
        </li>
        <li>
          <Link to="/game/running">달리기 게임</Link>
        </li>
        <li>
          <Link to="/game/dice">주사위 게임</Link>
        </li>
      </ul>
    </Container>
  );
};
