import { Transaction } from "@/domain/entities/transaction.entity";
import { Document } from "@/domain/validations/document.validation";
import { NumberValidation } from "@/domain/validations/number.validation";

interface CreateTransactionRequestProps {
  institutionNumber: number;
  agencyNumber: number;
  customerId: number;
  customerName: string;
  document: string;
  contractNumber: number;
  contractDate: Date;
  amount: number;
  productId: number;
  productDescription: string;
  walletId: number;
  walletDescription: string;
  proposalNumber: number;
  installments: number;
  installmentNumber: number;
  installmentType: string;
  installmentSequenceNumber: number;
  installmentDueDate: Date;
  installmentValue: number;
  latePaymentInterestValue: number;
  fineValue: number;
  otherChargesValue: number;
  iofValue: number;
  discountValue: number;
  currentValue: number;
  situationId: string;
  salesSituationId: string;
  isValidPayment: boolean;
}

export class CreateTransactionRequestDTO {
  map(request: CreateTransactionRequestProps): Transaction {
    const {
      agencyNumber,
      amount,
      contractDate,
      contractNumber,
      currentValue,
      customerId,
      customerName,
      discountValue,
      document,
      fineValue,
      installmentDueDate,
      installmentNumber,
      installmentSequenceNumber,
      installmentType,
      installmentValue,
      installments,
      institutionNumber,
      iofValue,
      latePaymentInterestValue,
      otherChargesValue,
      productDescription,
      productId,
      proposalNumber,
      salesSituationId,
      situationId,
      walletDescription,
      walletId,
      isValidPayment,
    } = request;

    const transaction = new Transaction({
      agencyNumber: new NumberValidation(agencyNumber),
      amount: new NumberValidation(amount),
      contractDate,
      contractNumber: new NumberValidation(contractNumber),
      currentValue: new NumberValidation(currentValue),
      customerId: new NumberValidation(customerId),
      customerName,
      discountValue: new NumberValidation(discountValue),
      document: new Document(document),
      fineValue: new NumberValidation(fineValue),
      installmentDueDate,
      installmentNumber: new NumberValidation(installmentNumber),
      installmentSequenceNumber: new NumberValidation(
        installmentSequenceNumber
      ),
      installmentType,
      installmentValue: new NumberValidation(installmentValue),
      installments: new NumberValidation(installments),
      institutionNumber: new NumberValidation(institutionNumber),
      iofValue: new NumberValidation(iofValue),
      latePaymentInterestValue: new NumberValidation(latePaymentInterestValue),
      otherChargesValue: new NumberValidation(otherChargesValue),
      productDescription,
      productId: new NumberValidation(productId),
      proposalNumber: new NumberValidation(proposalNumber),
      salesSituationId,
      situationId,
      walletDescription,
      walletId: new NumberValidation(walletId),
      isValidPayment,
    });

    return transaction;
  }
}

export class CreateTransactionResponseDTO {
  id: string;
  institutionNumber: number;
  agencyNumber: number;
  customerId: number;
  customerName: string;
  document: string;
  contractNumber: number;
  contractDate: Date;
  amount: number;
  productId: number;
  productDescription: string;
  walletId: number;
  walletDescription: string;
  proposalNumber: number;
  installments: number;
  installmentNumber: number;
  installmentType: string;
  installmentSequenceNumber: number;
  installmentDueDate: Date;
  installmentValue: number;
  latePaymentInterestValue: number;
  fineValue: number;
  otherChargesValue: number;
  iofValue: number;
  discountValue: number;
  currentValue: number;
  situationId: string;
  salesSituationId: string;

  map(transaction: Transaction): CreateTransactionResponseDTO {
    this.id = transaction.id;
    this.institutionNumber = transaction.institutionNumber.value;
    this.agencyNumber = transaction.agencyNumber.value;
    this.customerId = transaction.customerId.value;
    this.customerName = transaction.customerName;
    this.document = transaction.document.value;
    this.contractNumber = transaction.contractNumber.value;
    this.contractDate = transaction.contractDate;
    this.amount = transaction.amount.value;
    this.productId = transaction.productId.value;
    this.productDescription = transaction.productDescription;
    this.walletId = transaction.walletId.value;
    this.walletDescription = transaction.walletDescription;
    this.proposalNumber = transaction.proposalNumber.value;
    this.installments = transaction.installments.value;
    this.installmentNumber = transaction.installmentNumber.value;
    this.installmentType = transaction.installmentType;
    this.installmentSequenceNumber =
      transaction.installmentSequenceNumber.value;
    this.installmentDueDate = transaction.installmentDueDate;
    this.installmentValue = transaction.installmentValue.value;
    this.latePaymentInterestValue = transaction.latePaymentInterestValue.value;
    this.fineValue = transaction.fineValue.value;
    this.otherChargesValue = transaction.otherChargesValue.value;
    this.iofValue = transaction.iofValue.value;
    this.discountValue = transaction.discountValue.value;
    this.currentValue = transaction.currentValue.value;
    this.situationId = transaction.situationId;
    this.salesSituationId = transaction.salesSituationId;

    return this;
  }
}
