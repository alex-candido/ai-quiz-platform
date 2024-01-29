import 'reflect-metadata';

import { inject, injectable } from 'tsyringe';

import Game from '../infra/prisma/entities/Game';
import type IGamesRepository from '../repositories/IGamesRepository';

interface IRequest {
  userId: string;
  limit: number,
}

@injectable()
export class ListProviderUserIdGamesService {
  constructor(
    @inject('GamesRepository')
    private gamesRepository: IGamesRepository,
  ) {}

  public async execute({ userId, limit }: IRequest): Promise<Game[]> {
    return await this.gamesRepository.findAllGamesByUserId({ userId, limit });
  }
}
