import { CreateTransactionUseCase } from "@/usecases/transaction/create-transaction.usecase";
import { PrismaTransactionRepository } from "../database/repositories/prisma/prisma-transaction.repository";
import { CreateTransactionController } from "@/adapters/controllers/http/transaction/create-transaction.controller";

const repository = new PrismaTransactionRepository();

const usecase = new CreateTransactionUseCase(repository);

const createTransactionFactory = new CreateTransactionController(usecase);

export { createTransactionFactory };
