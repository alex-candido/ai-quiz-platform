import 'reflect-metadata';

import Game from '../../infra/prisma/entities/Game';
import IGamesRepository from '../IGamesRepository';

export const gameRepository: Game[] = []

class GamesRepository implements IGamesRepository {
  private ormRepository: Game[];

  constructor() {
    this.ormRepository = gameRepository;
  }

  public async findById(id: string): Promise<Game | null> {
    const findGame = this.ormRepository.find(game => game.id === id);

    return !findGame ? null : findGame;
  }

  public async findAllGamesCount( userId: string ): Promise<number> {
    const findGame = this.ormRepository.filter(game => game.userId === userId);
    const gameCount = findGame.length;

    return gameCount;
  }
}

export default GamesRepository;
