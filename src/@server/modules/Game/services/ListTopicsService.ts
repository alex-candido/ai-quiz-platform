import 'reflect-metadata';

import { inject, injectable } from 'tsyringe';

import Topics from '@/@server/modules/Game/infra/prisma/entities/Topics';
import type ITopicsRepository from '../repositories/ITopicsRepository';

@injectable()
export class ListTopicsService {
  constructor(
    @inject('TopicsRepository')
    private topicsRepository: ITopicsRepository,
  ) {}

  public async execute(): Promise<Topics[] | {}> {
    const topicsData = await this.topicsRepository.findAllTopics();

    return topicsData;
  }
}
