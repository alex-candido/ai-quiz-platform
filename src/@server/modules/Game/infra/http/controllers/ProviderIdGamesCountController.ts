import "reflect-metadata";

import { container } from 'tsyringe';

import { NextRequest, NextResponse } from "next/server";
import { ListProviderIdGamesCountService } from "../../../services/ListProviderIdGamesCountService";

export default class ProviderIdGamesCountController {
  public async create(request: NextRequest, _response: NextResponse): Promise<any> {
    const ListProviderIdGamesCount = container.resolve(ListProviderIdGamesCountService);
    const userId = request.nextUrl.searchParams.get('userId');

    const gamesCountData = await ListProviderIdGamesCount.execute({ userId: String(userId)});

    return gamesCountData
  }
}
