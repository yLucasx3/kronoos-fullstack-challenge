import { BaseError } from "../base.error";

export class TransactionMissingPropertiesError extends BaseError {
  constructor() {
    super("The transaction is missing properties!");

    this.name = "TransactionMissingPropertiesError";
    this.statusCode = 400;
  }
}
