
import { GetAllTopics } from "@/@server/shared/infra/http/abstract/game/getAllTopics";
import ProviderTopicsController from "../controllers/ProviderTopicsController";

export class ProviderTopicsAllRouter extends GetAllTopics {
  constructor(public readonly Request: Request, public readonly Response: Response) {
    super(Request, Response)
  }
  public async use(): Promise<any> {
    const topicsController = new ProviderTopicsController()
    return topicsController.create(this.Request, this.response);
  }
}
