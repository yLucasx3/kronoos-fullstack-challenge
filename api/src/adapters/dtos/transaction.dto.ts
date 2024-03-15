import { Transaction } from "@/domain/entities/transaction.entity";
import { Document } from "@/domain/validations/document.validation";
import { convertToDate, convertToFloat } from "../utils/format.util";

export interface ITransactionRowFromCsvProps {
  nrInst: string;
  nrAgencia: string;
  cdClient: string;
  nmClient: string;
  nrCpfCnpj: string;
  nrContrato: string;
  dtContrato: string;
  vlTotal: string;
  cdProduto: string;
  dsProduto: string;
  cdCarteira: string;
  dsCarteira: string;
  nrProposta: string;
  qtPrestacoes: string;
  nrPresta: string;
  tpPresta: string;
  nrSeqPre: string;
  dtVctPre: string;
  vlPresta: string;
  vlMora: string;
  vlMulta: string;
  vlOutAcr: string;
  vlIof: string;
  vlDescon: string;
  vlAtual: string;
  idSituac: string;
  idSitVen: string;
}

export class TransactionRequestDTO {
  map(row: ITransactionRowFromCsvProps): Transaction {
    console.log("TransactionRequestDTO: ", row);
    const transaction = new Transaction({
      institutionNumber: Number(row.nrInst),
      agencyNumber: Number(row.nrAgencia),
      customerId: Number(row.cdClient),
      customerName: row.nmClient,
      document: new Document(row.nrCpfCnpj),
      contractNumber: Number(row.nrContrato),
      contractDate: convertToDate(row.dtContrato),
      amount: Number(row.vlTotal),
      productId: Number(row.cdProduto),
      productDescription: row.dsProduto,
      walletId: Number(row.cdCarteira),
      walletDescription: row.dsCarteira,
      proposalNumber: Number(row.nrProposta),
      installments: Number(row.qtPrestacoes),
      installmentNumber: Number(row.nrPresta),
      installmentType: row.tpPresta,
      installmentSequenceNumber: Number(row.nrSeqPre),
      installmentDueDate: convertToDate(row.dtVctPre),
      installmentValue: convertToFloat(row.vlPresta),
      latePaymentValue: convertToFloat(row.vlMora),
      fineValue: convertToFloat(row.vlMulta),
      otherChargesValue: convertToFloat(row.vlOutAcr),
      iofValue: convertToFloat(row.vlIof),
      discountValue: convertToFloat(row.vlDescon),
      currentValue: Number(convertToFloat(row.vlAtual).toFixed(2)),
      situationId: row.idSituac,
      salesSituationId: row.idSitVen,
    });

    return transaction;
  }
}
