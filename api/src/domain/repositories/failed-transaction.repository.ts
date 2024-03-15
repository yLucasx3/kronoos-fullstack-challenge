import { FailedTransaction } from "../entities/failed-transaction";

export interface IFailedTransactionRepository {
  createMany(failedTransactions: FailedTransaction[]): Promise<boolean>;
}
