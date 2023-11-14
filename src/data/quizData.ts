export interface QuizProps {
  id: number;
  question: string;
  answer: string;
  hint: string;
}

export const quiz: QuizProps[] = [
  {
    id: 1,
    question: "사과를 한 입 베어물면?",
    answer: "파인애플",
    hint: "맛있게 사과를 베어무니 움푹 파였네요?",
  },
  {
    id: 2,
    question: "가장 차가운 해는?",
    answer: "썰렁해",
    hint: "설렁설렁 푸세요~",
  },
  {
    id: 3,
    question: "무가 넥타이를 매면?",
    answer: "무에타이",
    hint: "태국 전통 무술.",
  },
];
