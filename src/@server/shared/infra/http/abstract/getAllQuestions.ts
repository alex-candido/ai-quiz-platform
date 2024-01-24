export abstract class GetAllQuestions {
  public readonly request: Request;
  public readonly response: Response;

  constructor(public readonly Request: Request, public readonly Response: Response) {
    this.request = Request;
    this.response = Response;
  }
}
