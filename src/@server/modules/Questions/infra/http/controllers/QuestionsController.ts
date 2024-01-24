import "reflect-metadata";

import { container } from 'tsyringe';
import { CreateQuestionService } from '../../../services/CreateQuestionService';

export default class QuestionsController {
  public async create(request: Request, _response: Response): Promise<any> {
    const { name, description, question, answer } = await request.json();

    const createQuestion = container.resolve(CreateQuestionService);

    const questionData = await createQuestion.execute({
      name,
      description,
      question,
      answer,
    });

    return questionData
  }
}
