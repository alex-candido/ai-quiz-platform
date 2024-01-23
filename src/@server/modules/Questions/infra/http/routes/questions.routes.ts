
import { PostQuestions } from "@/@server/shared/infra/http/abstract/postQuestions";
import QuestionsController from "../controllers/QuestionsController";

export default class QuestionsRouter extends PostQuestions {
  constructor(public readonly Request: Request, public readonly Response: Response  ) {
    super(Request, Response)
  }
  public async use(): Promise<any> {
    const questionsController = new QuestionsController()
    return questionsController.create(this.Request, this.response);
  }
}
