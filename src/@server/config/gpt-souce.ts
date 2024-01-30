import { env } from "@/@server/config/env-schema";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: env.OPENAI_API_KEY,
});

const openaiSource = new OpenAIApi(configuration);

export default openaiSource;
