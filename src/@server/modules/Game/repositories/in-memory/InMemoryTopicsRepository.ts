import "reflect-metadata";

import AppDataSource from '@/@server/shared/infra/http/db/data-source';
import Topics from "../../infra/prisma/entities/Topics";
import ITopicsRepository from "../ITopicsRepository";

export const topicsRepository = AppDataSource.topic_count

class TopicsRepository implements ITopicsRepository {
  private ormRepository: Topics[] = [];

  public async findAllTopics(): Promise<Topics[]> {
    let topics = this.ormRepository;

    return topics;
  }
}

export default TopicsRepository;
