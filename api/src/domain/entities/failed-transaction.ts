import { BaseEntity } from "./base.entity";

export interface IFailedTransactionProps {
  transactionData: Record<string, any>;
  reasons: string[];
  date: Date;
}

export class FailedTransaction extends BaseEntity<IFailedTransactionProps> {
  constructor(props: IFailedTransactionProps, id?: string) {
    super(props, id);
  }

  get transactionData(): Record<string, any> {
    return this.props.transactionData;
  }

  get reasons(): string[] {
    return this.props.reasons;
  }

  get date(): Date {
    return this.props.date;
  }
}
