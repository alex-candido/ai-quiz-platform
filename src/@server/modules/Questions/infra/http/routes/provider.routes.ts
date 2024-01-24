
import { GetAllQuestions } from "@/@server/shared/infra/http/abstract/getAllQuestions";
import { GetIdQuestions, IGetResponse } from "@/@server/shared/infra/http/abstract/getIdQuestions";
import ProviderIdQuestionController from "../controllers/ProviderIdQuestionController";
import ProviderQuestionController from "../controllers/ProviderQuestionController";

export class ProviderIdRouter extends GetIdQuestions {
  constructor(public readonly Request: Request, public readonly Response: IGetResponse) {
    super(Request, Response)
  }
  public async use(): Promise<any> {
    const questionsController = new ProviderIdQuestionController()
    return questionsController.create(this.Request, this.response);
  }
}

export class ProviderAllRouter extends GetAllQuestions {
  constructor(public readonly Request: Request, public readonly Response: Response) {
    super(Request, Response)
  }
  public async use(): Promise<any> {
    const questionsController = new ProviderQuestionController()
    return questionsController.create(this.Request, this.response);
  }
}
