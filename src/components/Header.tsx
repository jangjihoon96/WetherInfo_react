import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">
        주접 날씨
        <span aria-hidden="true">line</span>
      </StyledLink>
      <StyledLink to="/game">
        미니 게임
        <span aria-hidden="true">line</span>
      </StyledLink>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 50px;
  background-color: #2f2845a3;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color: #fff;
  &:visited,
  &:link {
    color: #fff;
  }
  span {
    transition: all 0.5s;
    display: block;
    width: 0;
    height: 1px;
    background-color: #fff;
    font-size: 0;
  }
  &:hover span {
    width: 100%;
  }
`;
