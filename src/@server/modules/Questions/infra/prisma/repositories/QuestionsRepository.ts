import "reflect-metadata";

import { uuid } from 'uuidv4';

import ICreateQuestionDTO from '../../../dtos/ICreateQuestionDTO';
import IQuestionsRepository from '../../../repositories/IQuestionsRepository';
import Question from '../entities/Question';

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
      id: uuid(),
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
