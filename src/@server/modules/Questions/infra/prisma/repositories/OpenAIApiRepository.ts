import "reflect-metadata";

import { OpenAIApi } from "openai";

import openaiSource from "@/@server/config/gpt-souce";

import ICreateChatCompletionDTO from "../../../dtos/ICreateChatCompletionDTO";
import IOpenAIApiRepository from "../../../repositories/IOpenAIApiRepository";

export const OpenAIRepository = openaiSource;

class OpenAIApiRepository implements IOpenAIApiRepository {
  private OpenAIRepository: OpenAIApi;

  constructor() {
    this.OpenAIRepository = OpenAIRepository;
  }

  public async createChatCompletion({
    temperature,
    model,
    system_prompt,
    output_format_prompt,
    error_msg,
    user_prompt
  }: ICreateChatCompletionDTO): Promise<any> {
    const openAiResponse = await this.OpenAIRepository.createChatCompletion({
      temperature: temperature,
      model: model,
      messages: [
        {
          role: "system",
          content: system_prompt + output_format_prompt + error_msg,
        },
        { role: "user", content: user_prompt.toString() },
      ],
    })

    return openAiResponse;
  };
}

export default OpenAIApiRepository;
