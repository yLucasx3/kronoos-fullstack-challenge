import { PrismaFailedTransaction } from "../../configs/database-types";
import { FailedTransaction } from "@/domain/entities/failed-transaction";

export namespace FailedTransactionMapper {
  export const toDatabase = (
    failedTransaction: FailedTransaction
  ): PrismaFailedTransaction => {
    return {
      id: failedTransaction.id,
      transactionData: failedTransaction.transactionData,
      reasons: failedTransaction.reasons,
      date: failedTransaction.date,
    };
  };

  export const fromDatabase = (failedTransaction: PrismaFailedTransaction) => {
    const transactionData = failedTransaction.transactionData?.toString();

    return new FailedTransaction(
      {
        transactionData: JSON.parse(transactionData!),
        reasons: failedTransaction.reasons,
        date: failedTransaction.date,
      },
      failedTransaction.id
    );
  };
}
