import "reflect-metadata";

import { container } from "tsyringe";

// openai

import IOpenAIApiRepository from "@/@server/modules/Questions/repositories/IOpenAIApiRepository";

// Topics
import GamesRepository from "@/@server/modules/Game/infra/prisma/repositories/GamesRepository";
import TopicsRepository from "@/@server/modules/Game/infra/prisma/repositories/TopicsRepository";
import IGamesRepository from "@/@server/modules/Game/repositories/IGamesRepository";
import ITopicsRepository from "@/@server/modules/Game/repositories/ITopicsRepository";
import OpenAIApiRepository from "@/@server/modules/Questions/infra/prisma/repositories/OpenAIApiRepository";


container.registerSingleton<IOpenAIApiRepository>(
  'OpenAIApiRepository',
  OpenAIApiRepository,
);

container.registerSingleton<ITopicsRepository>(
  'TopicsRepository',
  TopicsRepository,
);

container.registerSingleton<IGamesRepository>(
  'GamesRepository',
  GamesRepository,
);
