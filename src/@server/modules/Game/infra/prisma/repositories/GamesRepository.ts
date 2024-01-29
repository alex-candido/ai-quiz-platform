import 'reflect-metadata';

import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

import AppDataSource from '@/@server/shared/infra/http/db/data-source';
import IFindAllProvidersDTO from '../../../dtos/IFindAllProvidersDTO';
import IGamesRepository from '../../../repositories/IGamesRepository';
import Game from '../entities/Game';

export const gameRepository = AppDataSource.game;

class GamesRepository implements IGamesRepository {
  private ormRepository: Prisma.GameDelegate<DefaultArgs>;

  constructor() {
    this.ormRepository = gameRepository;
  }

  public async findAllGamesByUserId({ userId, limit }: IFindAllProvidersDTO): Promise<Game[]> {
    const games = this.ormRepository.findMany({
      take: limit,
      where: {
        userId,
      },
      orderBy: {
        timeStarted: "desc",
      },
    })

    return games;
  }

  public async findAllGamesCount( userId: string ): Promise<number> {
    const gameCount = this.ormRepository.count({
      where: {
        userId,
      },
    });

    return gameCount;
  }
}

export default GamesRepository;
