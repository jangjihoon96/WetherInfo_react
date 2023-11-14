import React from "react";
import styled from "styled-components";

interface Props {
  children: string;
}

export const Title: React.FC<Props> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.h1`
  color: #ffffff;
  font-size: 40px;
  text-align: center;
  padding: 40px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
