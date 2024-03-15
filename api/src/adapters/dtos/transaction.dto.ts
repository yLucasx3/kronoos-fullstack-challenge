import { Transaction } from "@/domain/entities/transaction.entity";
import { Document } from "@/domain/validations/document.validation";

export interface ITransactionRowFromCsvProps {
  nrInst: number;
  nrAgencia: number;
  cdClient: number;
  nmClient: string;
  nrCpfCnpj: string;
  nrContrato: number;
  dtContrato: string;
  vlTotal: number;
  cdProduto: number;
  dsProduto: string;
  cdCarteira: number;
  dsCarteira: string;
  nrProposta: number;
  qtPrestacoes: number;
  nrPresta: number;
  tpPresta: string;
  nrSeqPre: number;
  dtVctPre: string;
  vlPresta: number;
  vlMora: number;
  vlMulta: number;
  vlOutAcr: number;
  vlIof: number;
  vlDescon: number;
  vlAtual: number;
  idSituac: number;
  idSitVen: number;
}

export class TransactionRequestDTO {
  map(row: ITransactionRowFromCsvProps): Transaction {
    const transaction = new Transaction({
      institutionNumber: row.nrInst,
      agencyNumber: row.nrAgencia,
      customerId: row.cdClient,
      customerName: row.nmClient,
      document: new Document(row.nrCpfCnpj),
      contractNumber: row.nrContrato,
      contractDate: new Date(row.dtContrato),
      amount: row.vlTotal,
      productId: row.cdProduto,
      productDescription: row.dsProduto,
      walletId: row.cdCarteira,
      walletDescription: row.dsCarteira,
      proposalNumber: row.nrProposta,
      installments: row.qtPrestacoes,
      installmentNumber: row.nrPresta,
      installmentType: row.tpPresta,
      installmentSequenceNumber: row.nrSeqPre,
      installmentDueDate: new Date(row.dtVctPre),
      installmentValue: row.vlPresta,
      latePaymentValue: row.vlMora,
      fineValue: row.vlMulta,
      otherChargesValue: row.vlOutAcr,
      iofValue: row.vlIof,
      discountValue: row.vlDescon,
      currentValue: row.vlAtual,
      situationId: row.idSituac,
      salesSituationId: row.idSitVen,
    });

    return transaction;
  }
}

export class TransactionResponseDTO {
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
  latePaymentValue: number;
  fineValue: number;
  otherChargesValue: number;
  iofValue: number;
  discountValue: number;
  currentValue: number;
  situationId: number;
  salesSituationId: number;

  map(transaction: Transaction): TransactionResponseDTO {
    this.id = transaction.id;
    this.institutionNumber = transaction.institutionNumber;
    this.agencyNumber = transaction.agencyNumber;
    this.customerId = transaction.customerId;
    this.customerName = transaction.customerName;
    this.document = transaction.document.value;
    this.contractNumber = transaction.contractNumber;
    this.contractDate = transaction.contractDate;
    this.amount = transaction.amount;
    this.productId = transaction.productId;
    this.productDescription = transaction.productDescription;
    this.walletId = transaction.walletId;
    this.walletDescription = transaction.walletDescription;
    this.proposalNumber = transaction.proposalNumber;
    this.installments = transaction.installments;
    this.installmentNumber = transaction.installmentNumber;
    this.installmentType = transaction.installmentType;
    this.installmentSequenceNumber = transaction.installmentSequenceNumber;
    this.installmentDueDate = transaction.installmentDueDate;
    this.installmentValue = transaction.installmentValue;
    this.latePaymentValue = transaction.latePaymentValue;
    this.fineValue = transaction.fineValue;
    this.otherChargesValue = transaction.otherChargesValue;
    this.iofValue = transaction.iofValue;
    this.discountValue = transaction.discountValue;
    this.currentValue = transaction.currentValue;
    this.situationId = transaction.situationId;
    this.salesSituationId = transaction.salesSituationId;

    return this;
  }
}
