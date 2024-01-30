import 'reflect-metadata';

import { container } from 'tsyringe';

import { getQuestionsSchema } from '@/@server/shared/schemas/questions';
import { CreateQuestionsService } from '../../../services/CreateQuestionsService';

export default class QuestionsController {
  public async create(request: Request, _response: Response): Promise<any> {
    const body = await request.json();

    const { amount, topic, type } = getQuestionsSchema.parse(body);

    const createQuestions = container.resolve(CreateQuestionsService);

    let questionsData: any;

    if (type === 'open_ended') {
      const system_prompt =
        'You are a helpful AI that is able to generate a pair of question and answers, the length of each answer should not be more than 15 words, store all the pairs of answers and questions in a JSON array';
      const user_prompt = new Array(amount).fill(
        `You are to generate a random hard open-ended questions about ${topic}`,
      );
      const output_format = {
        question: 'question',
        answer: 'answer with max length of 15 words',
      };

      questionsData = await createQuestions.execute({
        system_prompt,
        user_prompt,
        output_format,
      });
    } else if (type === 'mcq') {
      const system_prompt =
        'You are a helpful AI that is able to generate mcq questions and answers, the length of each answer should not be more than 15 words, store all answers and questions and options in a JSON array';
      const user_prompt = new Array(amount).fill(
        `You are to generate a random hard mcq question about ${topic}`,
      );
      const output_format = {
        question: 'question',
        answer: 'answer with max length of 15 words',
        option1: 'option1 with max length of 15 words',
        option2: 'option2 with max length of 15 words',
        option3: 'option3 with max length of 15 words',
      };

      questionsData = await createQuestions.execute({
        system_prompt,
        user_prompt,
        output_format,
      });
    }

    return questionsData;
  }
}
