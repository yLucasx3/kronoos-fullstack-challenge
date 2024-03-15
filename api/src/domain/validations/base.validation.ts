import { BaseError } from "../errors/base.error";

export abstract class BaseValidation {
  constructor(private _value: any) {}

  get value(): any {
    return this._value;
  }

  abstract isValid(): boolean;
  abstract error(): BaseError | string;
}
