import { BaseError } from "../errors/base.error";
import { InvalidDocumentError } from "../errors/transaction/invalid-document.error";
import { BaseValidation } from "./base.validation";

export class Document extends BaseValidation {
  isValid(): boolean {
    return this.isValidCpf() || this.isValidCnpj();
  }

  isValidCpf(): boolean {
    const expression: RegExp =
      /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;

    return RegExp(expression).test(this.value);
  }

  isValidCnpj(): boolean {
    const expression: RegExp =
      /(\d{2}[-.\s]?\d{3}[-.\s]?\d{3}[-.\s\/]?\d{4}[-.\s]?\d{2})/g;

    return RegExp(expression).test(this.value);
  }

  error(): BaseError {
    return new InvalidDocumentError();
  }
}
