import {
  ITransactionRowFromCsvProps,
  TransactionRequestDTO,
} from "@/adapters/dtos/transaction.dto";
import { FailedTransaction } from "@/domain/entities/failed-transaction";
import { Transaction } from "@/domain/entities/transaction.entity";
import { ICSVParserProvider } from "@/domain/provider/csv-parser.provider";
import { ITransactionRepository } from "@/domain/repositories/transaction.repository";

export class UploadTransactionsFromCSVUseCase {
  constructor(
    private transactionRepository: ITransactionRepository,
    private csvParserProvider: ICSVParserProvider
  ) {}

  async execute(csvBuffer: Buffer): Promise<boolean> {
    const transactions: Transaction[] = [];
    const failedTransactions: FailedTransaction[] = [];

    this.csvParserProvider.handle(csvBuffer, async (rows) => {
      rows.forEach((row) => {
        try {
          transactions.push(
            new TransactionRequestDTO().map(row as ITransactionRowFromCsvProps)
          );
        } catch (error) {
          // failedTransactions.push({
          //   transaction: row,
          //   errors: [error as unknown as string],
          // });
        }
      });

      await this.transactionRepository.createMany(transactions);
    });

    return true;
  }
}
