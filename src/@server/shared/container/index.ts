import { container } from "tsyringe";

import QuestionsRepository from "@/@server/modules/Questions/infra/prisma/repositories/QuestionsRepository";
import IQuestionsRepository from "@/@server/modules/Questions/repositories/IQuestionsRepository";
import "reflect-metadata";

container.registerSingleton<IQuestionsRepository>(
  'QuestionsRepository',
  QuestionsRepository,
);
