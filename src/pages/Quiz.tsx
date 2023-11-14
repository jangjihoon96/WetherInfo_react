import React, { useState, useEffect, useRef } from "react";
import { Title } from "../components/Title";
import { Container } from "../components/Container";
import { QuizProps, quiz } from "../data/quizData";

export const Quiz: React.FC = () => {
  const random: number = Math.floor(Math.random() * 3);
  const [quizData, setQuizData] = useState<QuizProps | null>(null);
  const [answer, setAnswer] = useState<string>("");
  const [hint, setHint] = useState<boolean>(false);
  const answerInput = useRef<any>();
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
    answerInput.current.focus();
  };
  const checkHint = () => {
    setHint(true);
  };

  useEffect(() => {
    showQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Title>유Quiz</Title>
      <div>Q. {quizData && quizData.question}</div>
      <form onSubmit={checkAnswer}>
        <input
          type="text"
          placeholder="정답을 적어보세요."
          ref={answerInput}
          value={answer}
          onChange={changeValue}
        />
        <button type="submit">확인하기</button>
        <button type="button" onClick={checkHint}>
          힌트보기
        </button>
      </form>
      <div
        className="hint"
        style={hint ? { display: "block" } : { display: "none" }}
      >
        {quizData && quizData.hint}
      </div>
    </Container>
  );
};
