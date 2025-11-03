export class HttpError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export class BadRequestError extends HttpError {
  constructor(message = "Bad Request") {
    super(400, message);
  }
}

export class InvalidCredentials extends HttpError{
  constructor(message = "Invalid Credentials"){
    super(401, message);
  }
}

export class NotFoundError extends HttpError {
  constructor(message = "Not Found") {
    super(404, message);
  }
}

export class InternalServerError extends HttpError {
  constructor(message = "Internal Server Error") {
    super(500, message);
  }
}
