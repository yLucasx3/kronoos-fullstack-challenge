import { Transaction } from "@/domain/entities/transaction.entity";
import { ITransactionRepository } from "@/domain/repositories/transaction.repository";
import {
  IPaginatedRequest,
  IPaginatedResponse,
} from "@/domain/shared/paginates-types";

export class ListTransactionsUseCase {
  constructor(private transactionRepository: ITransactionRepository) {}

  async execute(
    options: IPaginatedRequest
  ): Promise<IPaginatedResponse<Transaction>> {
    const transactions = await this.transactionRepository.list(options);

    return transactions;
  }
}
