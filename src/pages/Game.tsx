import React from "react";
import { Title } from "../components/Title";
import { Container } from "../components/Container";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Game: React.FC = () => {
  return (
    <Container>
      <Title>미니 게임</Title>
      <StyledGameList>
        <li>
          <Link className="link" to="/game/quiz">
            넌센스 퀴즈
          </Link>
        </li>
        <li>
          <Link className="link disabled" to={false ? "/game/running" : ""}>
            달리기 게임(개발중)
          </Link>
        </li>
        <li>
          <Link className="link disabled" to={false ? "/game/dice" : ""}>
            주사위 게임(개발중)
          </Link>
        </li>
      </StyledGameList>
    </Container>
  );
};

const StyledGameList = styled.ul`
  li {
    list-style: none;
  }
  .link:visited,
  .link:link {
    color: #ffffff;
  }
  .link {
    display: block;
    width: 300px;
    height: 40px;
    line-height: 40px;
    margin-bottom: 10px;
    text-decoration: none;
    background-color: #e06868;
    border: 1px solid #ffffff;
    border-radius: 8px;
    font-size: 20px;
    text-align: center;
    &:hover {
      background-color: #b85555;
    }
    &.disabled {
      cursor: not-allowed;
      color: #cccccc;
      border: 1px solid #999999;
      background-color: #555555;
    }
  }
`;
