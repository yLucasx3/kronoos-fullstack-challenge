import { BaseError } from "../errors/base.error";
import { InvalidDocumentError } from "../errors/transaction/invalid-document.error";
import { BaseValidation } from "./base.validation";

export class Document extends BaseValidation {
  isValid(): boolean {
    return typeof this.value === "string";
  }

  error(): BaseError {
    return new InvalidDocumentError();
  }
}
