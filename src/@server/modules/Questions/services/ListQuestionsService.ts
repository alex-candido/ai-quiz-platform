import 'reflect-metadata';

import { inject, injectable } from 'tsyringe';

import Question from '@/@server/modules/Questions/infra/prisma/entities/Question';
import type IQuestionsRepository from '../repositories/IQuestionsRepository';

@injectable()
export class ListQuestionsService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository,
  ) {}

  public async execute(): Promise<Question[] | {}> {
    const questionsData = await this.questionsRepository.findAllQuestions();

    return questionsData
  }
}
