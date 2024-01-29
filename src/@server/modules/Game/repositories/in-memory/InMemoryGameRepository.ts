import 'reflect-metadata';

import IFindAllProvidersDTO from '../../dtos/IFindAllProvidersDTO';
import Game from '../../infra/prisma/entities/Game';
import IGamesRepository from '../IGamesRepository';

export const gameRepository: Game[] = [];

class GamesRepository implements IGamesRepository {
  private ormRepository: Game[];

  constructor() {
    this.ormRepository = gameRepository;
  }

  public async findAllGamesByUserId({
    userId,
    limit,
  }: IFindAllProvidersDTO): Promise<Game[]> {
    const findGame = this.ormRepository.filter(game => game.userId === userId);
    const newFindGame = findGame
      .sort(
        (a, b) =>
          new Date(b.timeStarted as Date).getTime() -
          new Date(a.timeStarted as Date).getTime(),
      )
      .slice(0, limit);

    return newFindGame;
  }

  public async findById(id: string): Promise<Game | null> {
    const findGame = this.ormRepository.find(game => game.id === id);

    return !findGame ? null : findGame;
  }

  public async findAllGamesCount(userId: string): Promise<number> {
    const findGame = this.ormRepository.filter(game => game.userId === userId);
    const gameCount = findGame.length;

    return gameCount;
  }
}

export default GamesRepository;
