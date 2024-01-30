import ICreateChatCompletionDTO from "../dtos/ICreateChatCompletionDTO";

export default interface IOpenAIApiRepository {
  createChatCompletion(data: ICreateChatCompletionDTO): Promise<any>;
}
