import Topics from "@/@server/modules/Game/infra/prisma/entities/Topics";

export default interface ITopicsRepository {
  findAllTopics(): Promise<Topics[]>;
}
