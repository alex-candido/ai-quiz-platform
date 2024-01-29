import ICreateChatCompletionDTO from "../dtos/ICreateChatCompletionDTO";
import Question from "../infra/prisma/entities/Question";

export default interface IOpenAIApiRepository {
  createChatCompletion(data: ICreateChatCompletionDTO): Promise<Question[]>;
}
