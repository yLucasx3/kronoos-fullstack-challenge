import { BaseError } from "../errors/base.error";
import { InvalidNumberError } from "../errors/invalid-number.error";
import { BaseValidation } from "./base.validation";

export class NumberValidation extends BaseValidation {
  constructor(value: string | number, field?: string) {
    super(Number(value), field);
  }

  isValid(): boolean {
    return !isNaN(Number(this.value));
  }

  error(): BaseError {
    return new InvalidNumberError(this.field as string);
  }
}
