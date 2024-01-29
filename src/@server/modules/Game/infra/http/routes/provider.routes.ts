
import { GetAllTopics } from "@/@server/shared/infra/http/abstract/game/getAllTopics";
import { GetIdGamesCount } from "@/@server/shared/infra/http/abstract/game/getIdGamesCount";
import { GetUserIdGames } from "@/@server/shared/infra/http/abstract/game/getUserIdGames";
import { NextRequest, NextResponse } from "next/server";
import ProviderIdGamesCountController from "../controllers/ProviderIdGamesCountController";
import ProviderTopicsController from "../controllers/ProviderTopicsController";
import ProviderUserIdGamesController from "../controllers/ProviderUserIdGamesController";

export class ProviderTopicsAllRouter extends GetAllTopics {
  constructor(public readonly Request: NextRequest, public readonly Response: NextResponse) {
    super(Request, Response)
  }
  public async use(): Promise<any> {
    const topicsController = new ProviderTopicsController()
    return topicsController.create(this.Request, this.response);
  }
}

export class ProviderGamesCountIdRouter extends GetIdGamesCount {
  constructor(public readonly Request: NextRequest, public readonly Response: NextResponse) {
    super(Request, Response)
  }
  public async use(): Promise<any> {
    const gamesCountController = new ProviderIdGamesCountController()
    return gamesCountController.create(this.Request, this.response);
  }
}

export class ProviderGamesUserIdRouter extends GetUserIdGames {
  constructor(public readonly Request: NextRequest, public readonly Response: NextResponse) {
    super(Request, Response)
  }
  public async use(): Promise<any> {
    const gamesCountController = new ProviderUserIdGamesController()
    return gamesCountController.create(this.Request, this.response);
  }
}
