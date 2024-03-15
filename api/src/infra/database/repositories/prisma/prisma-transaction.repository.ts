import {
  Transaction,
  ITransactionProps,
} from "@/domain/entities/transaction.entity";
import { ITransactionRepository } from "@/domain/repositories/transaction.repository";
import { prisma } from "../../configs/prisma";
import { TransactionMapper } from "../mappers/transaction.mapper";

export class PrismaTransactionRepository implements ITransactionRepository {
  show(id: string): Promise<Transaction | null> {
    throw new Error("Method not implemented.");
  }
  create(transaction: ITransactionProps): Promise<Transaction> {
    throw new Error("Method not implemented.");
  }
  async createMany(transactions: Transaction[]): Promise<boolean> {
    const createdTransactions = await prisma.transaction.createMany({
      data: transactions.map((transaction) =>
        TransactionMapper.toDatabase(transaction)
      ),
    });

    return !!createdTransactions.count;
  }
  update(
    id: string,
    transaction: Partial<ITransactionProps>
  ): Promise<Transaction> {
    throw new Error("Method not implemented.");
  }
  updateMany(
    ids: string[],
    transactions: Partial<ITransactionProps>[]
  ): Promise<Transaction> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  deleteMany(ids: string[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
