import 'reflect-metadata';

import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

import AppDataSource from '@/@server/config/data-source';
import ITopicsRepository from '../../../repositories/ITopicsRepository';
import Topics from '../entities/Topics';

export const topicsRepository = AppDataSource.topic_count;

class TopicsRepository implements ITopicsRepository {
  private ormRepository: Prisma.topic_countDelegate<DefaultArgs>;

  constructor() {
    this.ormRepository = topicsRepository;
  }

  public async findAllTopics(): Promise<Topics[]> {
    let topics = this.ormRepository.findMany({});

    return topics;
  }
}

export default TopicsRepository;
