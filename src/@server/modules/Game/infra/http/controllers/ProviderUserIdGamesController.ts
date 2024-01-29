import "reflect-metadata";

import { container } from 'tsyringe';

import { NextRequest, NextResponse } from "next/server";
import { ListProviderUserIdGamesService } from "../../../services/ListProviderUserIdGamesService";

export default class ProviderUserIdGamesController {
  public async create(request: NextRequest, _response: NextResponse): Promise<any> {

    const userId = request.nextUrl.searchParams.get('userId');
    const limit = request.nextUrl.searchParams.get('limit');

    const ListProviderUserIdGames = container.resolve(ListProviderUserIdGamesService);

    const gamesData = await ListProviderUserIdGames.execute({
      userId: String(userId),
      limit: Number(limit),
    });

    return gamesData
  }
}
