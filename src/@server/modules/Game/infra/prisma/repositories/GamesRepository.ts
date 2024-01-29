import 'reflect-metadata';

import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

import AppDataSource from '@/@server/shared/infra/http/db/data-source';
import IGamesRepository from '../../../repositories/IGamesRepository';

export const gameRepository = AppDataSource.game;

class GamesRepository implements IGamesRepository {
  private ormRepository: Prisma.GameDelegate<DefaultArgs>;

  constructor() {
    this.ormRepository = gameRepository;
  }

  public async findAllGamesCount( userId: string ): Promise<number> {
    let gameCount = this.ormRepository.count({
      where: {
        userId,
      },
    });

    return gameCount;
  }
}

export default GamesRepository;
