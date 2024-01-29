import { ProviderQuestionsAllRouter, ProviderQuestionsIdRouter } from "@/@server/modules/Questions/infra/http/routes/provider.routes";
import { QuestionsRouter } from "@/@server/modules/Questions/infra/http/routes/questions.routes";

import { GetAllQuestions } from "@/@server/shared/infra/http/abstract/questions/getAllQuestions";
import { GetIdQuestions, IGetIdQuestionsResponse } from "@/@server/shared/infra/http/abstract/questions/getIdQuestions";
import { PostQuestions } from "@/@server/shared/infra/http/abstract/questions/postQuestions";

import { ProviderGameCountIdRouter, ProviderTopicsAllRouter } from "@/@server/modules/Game/infra/http/routes/provider.routes";
import { GetAllTopics } from "@/@server/shared/infra/http/abstract/game/getAllTopics";
import { GetIdGamesCount, IGetIdGamesCountResponse } from "@/@server/shared/infra/http/abstract/game/getIdGameCount";

// START QUESTIONS SERVER

export class PostServerQuestionsRouter extends PostQuestions {
  constructor(public readonly Request: Request, public readonly Response: Response) {
    super(Request, Response)
  }
  public async post(): Promise<any> {
    const questionsRouter = new QuestionsRouter(this.Request, this.response)
    return questionsRouter.use()
  }
}

export class GetServerIdQuestionsRouter extends GetIdQuestions {
  constructor(public readonly Request: Request, public readonly Response: IGetIdQuestionsResponse) {
    super(Request, Response)
  }
  public async get(): Promise<any> {
    const questionsRouter = new ProviderQuestionsIdRouter(this.Request, this.response)
    return questionsRouter.use()
  }
}

export class GetServerAllQuestionsRouter extends GetAllQuestions {
  constructor(public readonly Request: Request, public readonly Response: Response) {
    super(Request, Response)
  }
  public async get(): Promise<any> {
    const questionsRouter = new ProviderQuestionsAllRouter(this.Request, this.response)
    return questionsRouter.use()
  }
}

// START GAME SERVER

export class GetServerAllTopicsRouter extends GetAllTopics {
  constructor(public readonly Request: Request, public readonly Response: Response) {
    super(Request, Response)
  }
  public async get(): Promise<any> {
    const topicsRouter = new ProviderTopicsAllRouter(this.Request, this.response)
    return topicsRouter.use()
  }
}

export class GetServerIdGamesCountRouter extends GetIdGamesCount {
  constructor(public readonly Request: Request, public readonly Response: IGetIdGamesCountResponse) {
    super(Request, Response)
  }
  public async get(): Promise<any> {
    const GamesCountRouter = new ProviderGameCountIdRouter(this.Request, this.response)
    return GamesCountRouter.use()
  }
}

