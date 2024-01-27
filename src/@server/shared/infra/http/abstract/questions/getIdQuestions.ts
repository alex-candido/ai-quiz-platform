export interface IGetResponse {
  questionId: string
}

export abstract class GetIdQuestions {
  public readonly request: Request;
  public readonly response: IGetResponse;

  constructor(public readonly Request: Request, public readonly Response: IGetResponse) {
    this.request = Request;
    this.response = Response;
  }
}
