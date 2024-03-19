import { UploadTransactionsFromCSVUseCase } from "@/usecases/transaction/upload-transactions-from-csv.usecase";
import { PrismaTransactionRepository } from "../database/repositories/prisma/prisma-transaction.repository";
import { UploadTransactionsFromCSVController } from "@/adapters/controllers/http/transaction/upload-transactions-from-csv.controller";
import { CSVParserProvider } from "../providers/csv-parser.provider";
import { PrismaFailedTransactionRepository } from "../database/repositories/prisma/prisma-failed-transaction.repository";

const BATCH_SIZE = 1000;

const prismaTransactionRepository = new PrismaTransactionRepository();

const prismaFailedTransactionRepository =
  new PrismaFailedTransactionRepository();
const csvParserProvider = new CSVParserProvider(BATCH_SIZE);

const usecase = new UploadTransactionsFromCSVUseCase(
  prismaTransactionRepository,
  prismaFailedTransactionRepository,
  csvParserProvider
);

const uploadTransactionFromCSVFactory = new UploadTransactionsFromCSVController(
  usecase
);

export { uploadTransactionFromCSVFactory };
