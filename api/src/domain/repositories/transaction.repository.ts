import { Transaction } from "../entities/transaction.entity";
import {
  IPaginatedRequest,
  IPaginatedResponse,
} from "../shared/paginates-types";

export interface ITransactionRepository {
  list(options: IPaginatedRequest): Promise<IPaginatedResponse<Transaction>>;
  show(id: string): Promise<Transaction | null>;
  create(transaction: Transaction): Promise<Transaction>;
  createMany(transactions: Transaction[]): Promise<boolean>;
  update(id: string, transaction: Partial<Transaction>): Promise<Transaction>;
  updateMany(
    ids: string[],
    transactions: Partial<Transaction>[]
  ): Promise<boolean>;
  delete(id: string): Promise<void>;
  deleteMany(ids: string[]): Promise<void>;
}
