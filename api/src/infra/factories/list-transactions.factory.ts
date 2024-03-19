import { ListTransactionsUseCase } from "@/usecases/transaction/list-transactions.usecase";
import { PrismaTransactionRepository } from "../database/repositories/prisma/prisma-transaction.repository";
import { ListTransactionsController } from "@/adapters/controllers/http/transaction/list-transactions.controller";

const repository = new PrismaTransactionRepository();

const usecase = new ListTransactionsUseCase(repository);

const listTransactionsFactory = new ListTransactionsController(usecase);

export { listTransactionsFactory };
