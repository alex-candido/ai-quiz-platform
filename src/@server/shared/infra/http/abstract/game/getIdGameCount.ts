export interface IGetIdGamesCountResponse {
  userId: string
}

export abstract class GetIdGamesCount {
  public readonly request: Request;
  public readonly response: IGetIdGamesCountResponse;

  constructor(public readonly Request: Request, public readonly Response: IGetIdGamesCountResponse) {
    this.request = Request;
    this.response = Response;
  }
}
