import React from "react";
import styled from "styled-components";

interface Props {
  active: boolean;
  content: any;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Popup: React.FC<Props> = ({ active, content, setPopup }) => {
  if (content === "정답입니다.") {
    return (
      <StyledPopupContainer className={active ? "active" : ""}>
        <StyledBlackBg onClick={() => setPopup(false)}></StyledBlackBg>
        <StyledPopup className={active ? "active" : ""}>
          <h2>{content}</h2>
          <button
            type="button"
            className="next"
            onClick={() => setPopup(false)}
          >
            다음 문제
          </button>
        </StyledPopup>
      </StyledPopupContainer>
    );
  } else {
    return (
      <StyledPopupContainer className={active ? "active" : ""}>
        <StyledBlackBg onClick={() => setPopup(false)}></StyledBlackBg>
        <StyledPopup className={active ? "active" : ""}>
          <h2>{content}</h2>
          <button
            type="button"
            className="default"
            onClick={() => setPopup(false)}
          >
            닫기
          </button>
        </StyledPopup>
      </StyledPopupContainer>
    );
  }
};

const StyledPopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  &.active {
    visibility: visible;
    opacity: 1;
  }
`;
const StyledBlackBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
const StyledPopup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  width: 300px;
  height: 200px;
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  color: #191919;
  text-align: center;
  transition: all 0.3s;
  &.active {
    transform: translate(-50%, -50%);
  }
  button {
    border: none;
    width: 150px;
    height: 36px;
    border-radius: 8px;
    font-family: "Binggrae-Regular";
    font-size: 20px;
    color: #ffffff;
    cursor: pointer;
    &.next {
      background-color: #00a4f8;
    }
    &.next:hover {
      background-color: #0590d7;
    }
    &.default {
      background-color: #555555;
    }
    &.default:hover {
      background-color: #333333;
    }
  }
`;
