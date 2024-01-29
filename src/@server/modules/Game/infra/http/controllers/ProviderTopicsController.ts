import 'reflect-metadata';

import { container } from 'tsyringe';

import { ListTopicsService } from '@/@server/modules/Game/services/ListTopicsService';
import { NextRequest, NextResponse } from 'next/server';

export default class ProviderTopicsController {
  public async create(_request: NextRequest, _response: NextResponse): Promise<any> {
    const listTopicsService = container.resolve(ListTopicsService);

    const topicsData = await listTopicsService.execute();

    return topicsData;
  }
}
