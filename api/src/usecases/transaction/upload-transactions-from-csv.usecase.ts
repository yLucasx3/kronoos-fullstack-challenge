import {
  ITransactionRowFromCsvProps,
  TransactionDTO,
} from "@/adapters/dtos/upload-transactions.dto";
import { FailedTransaction } from "@/domain/entities/failed-transaction";
import { Transaction } from "@/domain/entities/transaction.entity";
import { ICSVParserProvider } from "@/domain/provider/csv-parser.provider";
import { IFailedTransactionRepository } from "@/domain/repositories/failed-transaction.repository";
import { ITransactionRepository } from "@/domain/repositories/transaction.repository";

export class UploadTransactionsFromCSVUseCase {
  constructor(
    private transactionRepository: ITransactionRepository,
    private failedTransactionRepository: IFailedTransactionRepository,
    private csvParserProvider: ICSVParserProvider
  ) {}

  async execute(csvBuffer: Buffer): Promise<boolean> {
    await this.csvParserProvider.handle(csvBuffer, async (rows) => {
      const transactions: Transaction[] = [];
      const failedTransactions: FailedTransaction[] = [];

      for (const row of rows) {
        const csvTransactionRow = row as ITransactionRowFromCsvProps;
        const transactionDTO = new TransactionDTO();

        await transactionDTO
          .map(csvTransactionRow)
          .then((transaction) => transactions.push(transaction))
          .catch((errors) => {
            const failedTransaction = new FailedTransaction({
              transactionData: csvTransactionRow,
              reasons: errors,
              date: new Date(),
            });

            failedTransactions.push(failedTransaction);
          });
      }

      await this.transactionRepository.createMany(transactions);
      await this.failedTransactionRepository.createMany(failedTransactions);
    });

    return true;
  }
}
