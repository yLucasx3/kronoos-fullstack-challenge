import { BaseError } from "./base.error";

export class InvalidNumberError extends BaseError {
  constructor(field: string) {
    super(`The ${field} field is filled with an invalid number`);

    this.name = "InvalidNumberError";
    this.statusCode = 400;
  }
}
