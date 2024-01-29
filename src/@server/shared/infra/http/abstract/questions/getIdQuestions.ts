export interface IGetIdQuestionsResponse {
  questionId: string
}

export abstract class GetIdQuestions {
  public readonly request: Request;
  public readonly response: IGetIdQuestionsResponse;

  constructor(public readonly Request: Request, public readonly Response: IGetIdQuestionsResponse) {
    this.request = Request;
    this.response = Response;
  }
}
