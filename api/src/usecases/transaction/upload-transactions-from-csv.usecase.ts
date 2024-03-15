import {
  ITransactionRowFromCsvProps,
  TransactionRequestDTO,
} from "@/adapters/dtos/transaction.dto";
import {
  ITransactionProps,
  Transaction,
} from "@/domain/entities/transaction.entity";
import { ICSVParserProvider } from "@/domain/provider/csv-parser.provider";
import { ITransactionRepository } from "@/domain/repositories/transaction.repository";

export class UploadTransactionsFromCSVUseCase {
  constructor(
    private transactionRepository: ITransactionRepository,
    private csvParserProvider: ICSVParserProvider
  ) {}

  async execute(csvBuffer: Buffer): Promise<boolean> {
    let transactionsChunk: Transaction[] = [];

    this.csvParserProvider.handle(csvBuffer, async (row) => {
      // console.log(row);
    });

    return true;
  }
}
