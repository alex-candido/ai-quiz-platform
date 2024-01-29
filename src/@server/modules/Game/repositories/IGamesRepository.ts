import IFindAllProvidersDTO from "../dtos/IFindAllProvidersDTO";
import Game from "../infra/prisma/entities/Game";

export default interface IGamesRepository {
  findAllGamesCount(userId: string ): Promise<any>;
  findAllGamesByUserId(data: IFindAllProvidersDTO): Promise<Game[]>
}
