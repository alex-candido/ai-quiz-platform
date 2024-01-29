
export default interface IGamesRepository {
  findAllGamesCount(userId: string ): Promise<any>;
}
