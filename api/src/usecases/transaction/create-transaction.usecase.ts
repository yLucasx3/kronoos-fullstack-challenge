import { Transaction } from "@/domain/entities/transaction.entity";
import { TransactionMissingPropertiesError } from "@/domain/errors/transaction/transaction-missing-properties.error";
import { ITransactionRepository } from "@/domain/repositories/transaction.repository";

export class CreateTransactionUseCase {
  constructor(private transactionRepository: ITransactionRepository) {}

  async execute(transaction: Transaction): Promise<Transaction> {
    if (!Object.values(transaction.props).every((prop) => prop)) {
      throw new TransactionMissingPropertiesError();
    }

    const newTransaction = await this.transactionRepository.create(transaction);

    return newTransaction;
  }
}
