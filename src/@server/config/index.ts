export class ServerError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends ServerError {
  constructor(message: string) {
    super(message, 400);
  }
}

export class NotFoundError extends ServerError {
  constructor(message: string) {
    super(message, 404);
  }
}

export class UnauthorizedError extends ServerError {
  constructor(message: string) {
    super(message, 401);
  }
}

export class ConflictError extends ServerError {
  constructor(message: string) {
    super(message, 409);
  }
}

export class ManyRequestsError extends ServerError {
  constructor(message: string) {
    super(message, 429);
  }
}
