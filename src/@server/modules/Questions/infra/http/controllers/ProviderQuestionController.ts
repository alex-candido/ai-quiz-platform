import 'reflect-metadata';

import { container } from 'tsyringe';
import { ListQuestionsService } from '../../../services/ListQuestionsService';

export default class ProviderQuestionController {
  public async create(_request: Request, _response: Response): Promise<any> {
    const listQuestionsService = container.resolve(ListQuestionsService);

    const questionsData = await listQuestionsService.execute();

    return questionsData;
  }
}
