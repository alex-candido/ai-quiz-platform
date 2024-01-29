interface QuestionData {
  id: string;
  question: string;
  answer: string;
  gameId: string;
  options: json;
  percentageCorrect: float;
  isCorrect: boolean;
  questionType: sameTy;
  userAnswer: string;
}
