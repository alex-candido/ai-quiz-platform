import QuestionsRouter from "@/@server/modules/Questions/infra/http/routes/questions.routes";
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
