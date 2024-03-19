import crypto from "node:crypto";
import { BaseValidation } from "../validations/base.validation";

export abstract class BaseEntity<T> {
  readonly id: string;
  public props: T;

  constructor(props: T, id?: string) {
    this.id = id ?? crypto.randomUUID();
    const errors = [];

    if (props) {
      for (const key of Object.keys(props)) {
        const value = props[key as keyof T];

        if (value instanceof BaseValidation && !value.isValid()) {
          errors.push(value.error());
        }
      }

      if (errors.length) {
        throw errors;
      }
    }

    this.props = props;
  }
}
