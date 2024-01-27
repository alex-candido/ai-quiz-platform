import "reflect-metadata";

import { container } from 'tsyringe';

import { IGetResponse } from '@/@server/shared/infra/http/abstract/questions/getIdQuestions';
import { ListProviderIdQuestionService } from '../../../services/ListProviderIdQuestionService';

export default class ProviderIdQuestionController {
  public async create(_request: Request, response: IGetResponse): Promise<any> {
    const ListProviderIdQuestion = container.resolve(ListProviderIdQuestionService);

    const questionData = await ListProviderIdQuestion.execute({ id: response.questionId});

    return questionData
  }
}
