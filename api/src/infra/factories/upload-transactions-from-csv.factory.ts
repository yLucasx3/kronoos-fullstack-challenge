import { UploadTransactionsFromCSVUseCase } from "@/usecases/transaction/upload-transactions-from-csv.usecase";
import { PrismaTransactionRepository } from "../database/repositories/prisma/prisma-transaction.repository";
import { UploadTransactionsFromCSVController } from "@/adapters/controllers/http/transaction/upload-transactions-from-csv.controller";
import { CSVParserProvider } from "../providers/csv-parser.provider";

const repository = new PrismaTransactionRepository();
const csvParserProvider = new CSVParserProvider();

const usecase = new UploadTransactionsFromCSVUseCase(
  repository,
  csvParserProvider
);

const uploadTransactionFromCSVFactory = new UploadTransactionsFromCSVController(
  usecase
);

export { uploadTransactionFromCSVFactory };
