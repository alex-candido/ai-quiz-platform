import Question from "@/@server/modules/Questions/infra/prisma/entities/Question";
import ICreateQuestionDTO from "../dtos/ICreateQuestionDTO";

export default interface IQuestionsRepository {
  create(data: ICreateQuestionDTO): Promise<Question>;
  findById(id: string): Promise<Question | null>;
  findAllQuestions(): Promise<Question[]>;
}
