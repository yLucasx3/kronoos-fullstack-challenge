import { Transaction, ITransactionProps } from "../entities/transaction.entity";

export interface ITransactionRepository {
  show(id: string): Promise<Transaction | null>;
  create(transaction: ITransactionProps): Promise<Transaction>;
  createMany(transactions: Transaction[]): Promise<boolean>;
  update(
    id: string,
    transaction: Partial<ITransactionProps>
  ): Promise<Transaction>;
  updateMany(
    ids: string[],
    transactions: Partial<ITransactionProps>[]
  ): Promise<Transaction>;
  delete(id: string): Promise<void>;
  deleteMany(ids: string[]): Promise<void>;
}
