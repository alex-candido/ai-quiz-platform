
export default class QuestionsController {
  public async create(request: Request, _response: Response): Promise<any> {
    const body = await request.json();
    const { amount, topic, type } = await body;

    const data = {
      amount: amount,
      topic: topic,
      type:type
    }

    return data;
  }
}
