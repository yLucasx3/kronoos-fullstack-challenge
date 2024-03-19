import { FailedTransaction } from "@/domain/entities/failed-transaction";
import { PrismaFailedTransaction } from "../../configs/database-types";
import { JsonValue } from "@prisma/client/runtime/library";

export namespace FailedTransactionMapper {
  export const toDatabase = (
    failedTransaction: FailedTransaction
  ): PrismaFailedTransaction => {
    return {
      id: failedTransaction.id,
      transactionData: failedTransaction.transactionData as JsonValue,
      reasons: failedTransaction.reasons,
      date: failedTransaction.date,
    };
  };

  export const fromDatabase = (failedTransaction: PrismaFailedTransaction) => {
    const transactionData = failedTransaction.transactionData;

    return new FailedTransaction(
      {
        transactionData: JSON.parse(JSON.stringify(transactionData)),
        reasons: failedTransaction.reasons,
        date: failedTransaction.date,
      },
      failedTransaction.id
    );
  };
}
