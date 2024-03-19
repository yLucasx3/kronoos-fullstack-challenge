export interface ITransactionProps {
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
  latePaymentValue: number;
  fineValue: number;
  otherChargesValue: number;
  iofValue: number;
  discountValue: number;
  currentValue: number;
  situationId: string;
  salesSituationId: string;
}

export interface ITransactionAPIResponse {
  items: ITransactionProps[];
  pageInfos: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}
