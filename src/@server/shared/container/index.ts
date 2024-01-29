import "reflect-metadata";

import { container } from "tsyringe";

// Questions
import QuestionsRepository from "@/@server/modules/Questions/infra/prisma/repositories/QuestionsRepository";
import IQuestionsRepository from "@/@server/modules/Questions/repositories/IQuestionsRepository";

// Topics
import GamesRepository from "@/@server/modules/Game/infra/prisma/repositories/GamesRepository";
import TopicsRepository from "@/@server/modules/Game/infra/prisma/repositories/TopicsRepository";
import IGamesRepository from "@/@server/modules/Game/repositories/IGamesRepository";
import ITopicsRepository from "@/@server/modules/Game/repositories/ITopicsRepository";

container.registerSingleton<IQuestionsRepository>(
  'QuestionsRepository',
  QuestionsRepository,
);

container.registerSingleton<ITopicsRepository>(
  'TopicsRepository',
  TopicsRepository,
);

container.registerSingleton<IGamesRepository>(
  'GamesRepository',
  GamesRepository,
);
