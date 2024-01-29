import "reflect-metadata";

import { container } from 'tsyringe';

import { IGetIdGamesCountResponse } from '@/@server/shared/infra/http/abstract/game/getIdGameCount';
import { ListProviderIdGamesCountService } from "../../../services/ListProviderIdGamesCountService";

export default class ProviderIdGamesCountController {
  public async create(_request: Request, response: IGetIdGamesCountResponse): Promise<any> {
    const ListProviderIdGamesCount = container.resolve(ListProviderIdGamesCountService);

    const gamesCountData = await ListProviderIdGamesCount.execute({ userId: response.userId});

    return gamesCountData
  }
}
