import { BaseError } from "../base.error";

export class UploadFileNotProvidedError extends BaseError {
  constructor() {
    super("CSV file not provided!");

    this.name = "UploadFileNotProvidedError";
    this.statusCode = 400;
  }
}
