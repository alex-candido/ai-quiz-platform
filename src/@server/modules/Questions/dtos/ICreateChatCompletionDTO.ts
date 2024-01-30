export default interface ICreateChatCompletionDTO {
  temperature: number;
  model: string;
  system_prompt: string;
  output_format_prompt: string;
  error_msg: string;
  user_prompt: string | string[];
}
