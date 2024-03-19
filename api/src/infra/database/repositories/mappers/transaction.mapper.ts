import { Document } from "@/domain/validations/document.validation";
import { PrismaTransaction } from "../../configs/database-types";
import { Transaction } from "@/domain/entities/transaction.entity";
import { Optional } from "@/domain/shared/make-optional";
import { NumberValidation } from "@/domain/validations/number.validation";

export namespace TransactionMapper {
  export const toDatabase = (
    transaction: Transaction | Partial<Transaction>
  ): Optional<PrismaTransaction, "id"> => {
    return {
      id: transaction.id,
      agencyNumber: transaction.agencyNumber?.value!,
      amount: transaction.amount?.value!,
      contractDate: transaction.contractDate!,
      contractNumber: transaction.contractNumber?.value!,
      currentValue: transaction.currentValue?.value!,
      customerId: transaction.customerId?.value!,
      customerName: transaction.customerName!,
      discountValue: transaction.discountValue?.value!,
      document: transaction.document!.value!,
      fineValue: transaction.fineValue?.value!,
      installmentDueDate: transaction.installmentDueDate!,
      installmentNumber: transaction.installmentNumber?.value!,
      installments: transaction.installments?.value!,
      installmentSequenceNumber: transaction.installmentSequenceNumber?.value!,
      installmentType: transaction.installmentType!,
      installmentValue: transaction.installmentValue?.value!,
      institutionNumber: transaction.institutionNumber?.value!,
      iofValue: transaction.iofValue?.value!,
      latePaymentInterestValue: transaction.latePaymentInterestValue?.value!,
      otherChargesValue: transaction.otherChargesValue?.value!,
      productDescription: transaction.productDescription!,
      productId: transaction.productId?.value!,
      proposalNumber: transaction.proposalNumber?.value!,
      salesSituationId: transaction.salesSituationId!,
      situationId: transaction.situationId!,
      walletDescription: transaction.walletDescription!,
      walletId: transaction.walletId?.value!,
      isValidPayment: transaction.isValidPayment!,
    };
  };

  export const fromDatabase = (transaction: PrismaTransaction): Transaction => {
    return new Transaction(
      {
        agencyNumber: new NumberValidation(transaction.agencyNumber).value,
        amount: new NumberValidation(transaction.amount).value,
        contractDate: transaction.contractDate,
        contractNumber: new NumberValidation(transaction.contractNumber).value,
        currentValue: new NumberValidation(transaction.currentValue).value,
        customerId: new NumberValidation(transaction.customerId).value,
        customerName: transaction.customerName,
        discountValue: new NumberValidation(transaction.discountValue).value,
        document: new Document(transaction.document).value,
        fineValue: new NumberValidation(transaction.fineValue).value,
        installmentDueDate: transaction.installmentDueDate,
        installmentNumber: new NumberValidation(transaction.installmentNumber)
          .value,
        installments: new NumberValidation(transaction.installments).value,
        installmentSequenceNumber: new NumberValidation(
          transaction.installmentSequenceNumber
        ).value,
        installmentType: transaction.installmentType,
        installmentValue: new NumberValidation(transaction.installmentValue)
          .value,
        institutionNumber: new NumberValidation(transaction.institutionNumber)
          .value,
        iofValue: new NumberValidation(transaction.iofValue).value,
        latePaymentInterestValue: new NumberValidation(
          transaction.latePaymentInterestValue
        ).value,
        otherChargesValue: new NumberValidation(transaction.otherChargesValue)
          .value,
        productDescription: transaction.productDescription,
        productId: new NumberValidation(transaction.productId).value,
        proposalNumber: new NumberValidation(transaction.proposalNumber).value,
        salesSituationId: transaction.salesSituationId,
        situationId: transaction.situationId,
        walletDescription: transaction.walletDescription,
        walletId: new NumberValidation(transaction.walletId).value,
        isValidPayment: transaction.isValidPayment,
      },
      transaction.id
    );
  };
}
