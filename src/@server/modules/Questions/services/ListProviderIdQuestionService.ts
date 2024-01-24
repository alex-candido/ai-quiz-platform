import 'reflect-metadata';

import { inject, injectable } from 'tsyringe';

import Question from '@/@server/modules/Questions/infra/prisma/entities/Question';
import type IQuestionsRepository from '../repositories/IQuestionsRepository';

interface IRequest {
  id: string;
}

@injectable()
export class ListProviderIdQuestionService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Question | null> {
    return await this.questionsRepository.findById(id);
  }
}
