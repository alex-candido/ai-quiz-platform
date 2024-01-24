import 'reflect-metadata';

import { inject, injectable } from 'tsyringe';

import QuestionsRepository from '../infra/prisma/repositories/QuestionsRepository';

interface IRequest {
  name: string;
  description: string;
  question: string;
  answer: string;
}

@injectable()
export class CreateQuestionService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: QuestionsRepository,
  ) {}

  public async execute({
    name,
    description,
    question,
    answer,
  }: IRequest): Promise<any> {
    const questionData = await this.questionsRepository.create({
      name,
      description,
      question,
      answer,
    });

    return questionData
  }
}
