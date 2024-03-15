import { Document } from "@/domain/validations/document.validation";
import { PrismaTransaction } from "../../configs/database-types";
import { Transaction } from "@/domain/entities/transaction.entity";

export namespace TransactionMapper {
  export const toDatabase = (transaction: Transaction): PrismaTransaction => {
    return {
      id: transaction.id,
      agencyNumber: transaction.agencyNumber,
      amount: transaction.amount,
      contractDate: transaction.contractDate,
      contractNumber: transaction.contractNumber,
      currentValue: transaction.currentValue,
      customerId: transaction.customerId,
      customerName: transaction.customerName,
      discountValue: transaction.discountValue,
      document: transaction.document.value,
      fineValue: transaction.fineValue,
      installmentDueDate: transaction.installmentDueDate,
      installmentNumber: transaction.installmentNumber,
      installments: transaction.installments,
      installmentSequenceNumber: transaction.installmentSequenceNumber,
      installmentType: transaction.installmentType,
      installmentValue: transaction.installmentValue,
      institutionNumber: transaction.institutionNumber,
      iofValue: transaction.iofValue,
      latePaymentValue: transaction.latePaymentValue,
      otherChargesValue: transaction.otherChargesValue,
      productDescription: transaction.productDescription,
      productId: transaction.productId,
      proposalNumber: transaction.proposalNumber,
      salesSituationId: transaction.salesSituationId,
      situationId: transaction.situationId,
      walletDescription: transaction.walletDescription,
      walletId: transaction.walletId,
    };
  };

  export const fromDatabase = (transaction: PrismaTransaction): Transaction => {
    return new Transaction(
      {
        agencyNumber: transaction.agencyNumber,
        amount: transaction.amount,
        contractDate: transaction.contractDate,
        contractNumber: transaction.contractNumber,
        currentValue: transaction.currentValue,
        customerId: transaction.customerId,
        customerName: transaction.customerName,
        discountValue: transaction.discountValue,
        document: new Document(transaction.document).value,
        fineValue: transaction.fineValue,
        installmentDueDate: transaction.installmentDueDate,
        installmentNumber: transaction.installmentNumber,
        installments: transaction.installments,
        installmentSequenceNumber: transaction.installmentSequenceNumber,
        installmentType: transaction.installmentType,
        installmentValue: transaction.installmentValue,
        institutionNumber: transaction.institutionNumber,
        iofValue: transaction.iofValue,
        latePaymentValue: transaction.latePaymentValue,
        otherChargesValue: transaction.otherChargesValue,
        productDescription: transaction.productDescription,
        productId: transaction.productId,
        proposalNumber: transaction.proposalNumber,
        salesSituationId: transaction.salesSituationId,
        situationId: transaction.situationId,
        walletDescription: transaction.walletDescription,
        walletId: transaction.walletId,
      },
      transaction.id
    );
  };
}
