import { BaseError } from "../errors/base.error";

export abstract class BaseValidation {
  constructor(private _value: any, private _field?: string) {}

  get value(): any {
    return this._value;
  }

  get field(): string | undefined {
    return this._field;
  }

  abstract isValid(): boolean;
  abstract error(): BaseError;
}
