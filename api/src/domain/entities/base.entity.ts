import crypto from "node:crypto";
import { BaseValidation } from "../validations/base.validation";

export abstract class BaseEntity<T> {
  readonly id: string;
  public props: T;

  constructor(props: T, id?: string) {
    this.id = id ?? crypto.randomUUID();

    if (props) {
      for (const key of Object.keys(props)) {
        const value = props[key as keyof T];

        if (value instanceof BaseValidation && !value.isValid()) {
          throw value.error();
        }
      }
    }

    this.props = props;
  }
}
