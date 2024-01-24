import { ProviderAllRouter, ProviderIdRouter } from "@/@server/modules/Questions/infra/http/routes/provider.routes";
import { QuestionsRouter } from "@/@server/modules/Questions/infra/http/routes/questions.routes";
import { GetAllQuestions } from "../abstract/getAllQuestions";
import { GetIdQuestions, IGetResponse } from "../abstract/getIdQuestions";
import { PostQuestions } from "../abstract/postQuestions";

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
  constructor(public readonly Request: Request, public readonly Response: IGetResponse) {
    super(Request, Response)
  }
  public async get(): Promise<any> {
    const questionsRouter = new ProviderIdRouter(this.Request, this.response)
    return questionsRouter.use()
  }
}

export class GetServerAllQuestionsRouter extends GetAllQuestions {
  constructor(public readonly Request: Request, public readonly Response: Response) {
    super(Request, Response)
  }
  public async get(): Promise<any> {
    const questionsRouter = new ProviderAllRouter(this.Request, this.response)
    return questionsRouter.use()
  }
}

