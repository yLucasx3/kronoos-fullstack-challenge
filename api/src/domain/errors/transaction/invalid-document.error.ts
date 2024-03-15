import { BaseError } from "../base.error";

export class InvalidDocumentError extends BaseError {
  constructor() {
    super("Invalid document.");

    this.name = "InvalidDocumentError";
    this.statusCode = 400;
  }
}
