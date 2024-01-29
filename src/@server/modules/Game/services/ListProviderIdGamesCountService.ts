import 'reflect-metadata';

import { inject, injectable } from 'tsyringe';

import type IGamesRepository from '../repositories/IGamesRepository';

interface IRequest {
  userId: string;
}

@injectable()
export class ListProviderIdGamesCountService {
  constructor(
    @inject('GamesRepository')
    private gamesRepository: IGamesRepository,
  ) {}

  public async execute({ userId }: IRequest): Promise<number> {
    return await this.gamesRepository.findAllGamesCount(userId);
  }
}
