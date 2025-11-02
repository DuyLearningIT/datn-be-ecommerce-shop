export class HttpError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export class BadRequestEror extends HttpError {
  constructor(message = "Bad Request") {
    super(404, message);
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
