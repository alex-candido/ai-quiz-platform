import "reflect-metadata";

import { v4 as uuidv4 } from 'uuid';

import ICreateQuestionDTO from "../../dtos/ICreateQuestionDTO";
import Question from "../../infra/prisma/entities/Question";
import IQuestionsRepository from "../IQuestionsRepository";

export const questionsRepository: Question[] = [];

class QuestionsRepository implements IQuestionsRepository {
  private ormRepository: Question[];

  constructor() {
    this.ormRepository = questionsRepository;
  }

  public async create({
    name,
    description,
    question,
    answer,
  }: ICreateQuestionDTO): Promise<Question> {
    const questionData = Object({
      id: uuidv4(),
      name,
      description,
      question,
      answer,
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.ormRepository.push(questionData);
    return questionData;
  }

  public async findById(id: string): Promise<Question | null> {
    const findQuestion = this.ormRepository.find(
      question => question.id === id,
    );
    return !findQuestion ? null : findQuestion;
  }

  public async findAllQuestions(): Promise<Question[]> {
    let questions = this.ormRepository;

    return questions;
  }
}

export default QuestionsRepository;
