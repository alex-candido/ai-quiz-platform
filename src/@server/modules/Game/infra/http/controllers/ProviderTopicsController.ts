import 'reflect-metadata';

import { container } from 'tsyringe';

import { ListTopicsService } from '@/@server/modules/Game/services/ListTopicsService';

export default class ProviderTopicsController {
  public async create(_request: Request, _response: Response): Promise<any> {
    const listTopicsService = container.resolve(ListTopicsService);

    const topicsData = await listTopicsService.execute();

    return topicsData;
  }
}
