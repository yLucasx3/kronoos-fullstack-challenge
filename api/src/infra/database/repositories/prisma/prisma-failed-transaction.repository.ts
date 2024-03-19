import { FailedTransaction } from "@/domain/entities/failed-transaction";
import { IFailedTransactionRepository } from "@/domain/repositories/failed-transaction.repository";
import { prisma } from "../../configs/prisma";

export class PrismaFailedTransactionRepository
  implements IFailedTransactionRepository
{
  async createMany(failedTransactions: FailedTransaction[]): Promise<boolean> {
    const createdFailedTransactions = await prisma.failedTransaction.createMany(
      {
        data: failedTransactions.map((failedTransaction) => ({
          transactionData: failedTransaction.transactionData,
          reasons: failedTransaction.reasons,
          date: failedTransaction.date,
        })),
      }
    );

    return !!createdFailedTransactions;
  }
}
