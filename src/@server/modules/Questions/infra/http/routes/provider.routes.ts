
import { GetAllQuestions } from "@/@server/shared/infra/http/abstract/questions/getAllQuestions";
import { GetIdQuestions, IGetIdQuestionsResponse } from "@/@server/shared/infra/http/abstract/questions/getIdQuestions";
import ProviderIdQuestionController from "../controllers/ProviderIdQuestionController";
import ProviderQuestionController from "../controllers/ProviderQuestionController";

export class ProviderQuestionsIdRouter extends GetIdQuestions {
  constructor(public readonly Request: Request, public readonly Response: IGetIdQuestionsResponse) {
    super(Request, Response)
  }
  public async use(): Promise<any> {
    const questionsController = new ProviderIdQuestionController()
    return questionsController.create(this.Request, this.response);
  }
}

export class ProviderQuestionsAllRouter extends GetAllQuestions {
  constructor(public readonly Request: Request, public readonly Response: Response) {
    super(Request, Response)
  }
  public async use(): Promise<any> {
    const questionsController = new ProviderQuestionController()
    return questionsController.create(this.Request, this.response);
  }
}
