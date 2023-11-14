import React, { useState, useEffect, useRef } from "react";
import { Container } from "../components/Container";
import { QuizProps, quiz } from "../data/quizData";
import styled from "styled-components";

export const Quiz: React.FC = () => {
  const random: number = Math.floor(Math.random() * 3);
  const [quizData, setQuizData] = useState<QuizProps | null>(null);
  const [answer, setAnswer] = useState<string>("");
  const [hint, setHint] = useState<boolean>(false);
  const answerInput = useRef<HTMLInputElement>(null);
  const showQuiz = (): void => {
    if (quiz) {
      setQuizData(quiz[random]);
    } else {
      console.log("퀴즈를 불러오지 못했습니다.");
    }
  };
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAnswer(e.target.value);
  };
  const checkAnswer = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!answer) {
      alert("우우우웅... 정답을 입력하셔야죠~");
    } else if (quizData?.answer === answer) {
      alert("정답입니다.");
      setAnswer("");
      setHint(false);
      setQuizData(quiz[random]);
    } else {
      alert("아쉽네요. 틀렸습니다 ^^");
      setAnswer("");
    }
    if (answerInput.current) {
      answerInput.current.focus();
    }
  };
  const checkHint = (): void => {
    setHint(true);
  };
  const handleNext = (): void => {
    console.log("hi");
  };

  useEffect(() => {
    showQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <StyledQuestion>
        Q. {quizData ? quizData.question : "퀴즈를 불러오지 못했습니다."}
      </StyledQuestion>
      <StyledQuizForm onSubmit={checkAnswer}>
        <input
          type="text"
          placeholder="정답을 적어보세요."
          ref={answerInput}
          value={answer}
          onChange={changeValue}
        />
        <button type="submit" className="answer-button">
          확인하기
        </button>
        <button
          type="button"
          className={"hint-button" + (hint ? " active" : "")}
          onClick={checkHint}
        >
          힌트보기
          <span aria-hidden="true">line</span>
        </button>
      </StyledQuizForm>
      <StyledHint
        className="hint"
        style={hint ? { display: "block" } : { display: "none" }}
      >
        {quizData && quizData.hint}
      </StyledHint>
      <StyledNext onClick={handleNext}>
        문제가 어려우신가요? <button type="button">정답 확인</button>
      </StyledNext>
    </Container>
  );
};

const StyledQuestion = styled.h2`
  padding-top: 40px;
  font-size: 28px;
  text-align: center;
  color: #ffffff;
`;

const StyledQuizForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 18px;
  input {
    width: 100%;
    max-width: 400px;
    height: 60px;
    border: none;
    border-radius: 8px;
    padding: 0 24px;
    background-color: rgba(0, 0, 0, 0.5);
    font-family: "Binggrae-Regular";
    font-size: 20px;
    color: #ffffff;
    &::placeholder {
      color: #aaaaaa;
    }
  }
  button {
    background-color: transparent;
    border: none;
    border-radius: 8px;
    margin-top: 20px;
    padding: 0 24px;
    color: #ffffff;
    cursor: pointer;
    font-family: "Binggrae-Regular";
    font-size: 20px;
  }
  button.answer-button {
    width: 200px;
    height: 40px;
    border: 1px solid #ffffff;
    background-color: #00a4f8;
    &:hover {
      background-color: #0590d7;
    }
  }
  button.hint-button {
    color: #cccccc;
    span {
      transition: all 0.5s;
      display: block;
      width: 0;
      height: 1px;
      background-color: #ffffff;
      font-size: 0;
    }
    &:hover {
      color: #ffffff;
    }
    &:hover span {
      width: 100%;
    }
    &.active {
      color: #ffffff;
      cursor: default;
      span {
        transition: all 0.5s;
        display: block;
        width: 100%;
        height: 1px;
        background-color: #ffffff;
        font-size: 0;
      }
    }
  }
`;

const StyledHint = styled.div`
  margin-top: 12px;
  font-family: "Binggrae-Bold";
  font-size: 24px;
`;

const StyledNext = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: 1px solid #aaaaaa;
  margin-top: 20px;
  padding-top: 40px;
  font-family: "Binggrae-Regular";
  font-size: 20px;
  color: #cccccc;
  button {
    cursor: pointer;
    margin-left: 8px;
    font-size: 20px;
    color: #ffffff;
    font-family: "Binggrae-Bold";
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid #ffffff;
  }
`;
