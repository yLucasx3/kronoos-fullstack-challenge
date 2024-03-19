import { Transaction } from "@/domain/entities/transaction.entity";
import { Document } from "@/domain/validations/document.validation";
import { convertToDate } from "../utils/format.util";
import { BaseError } from "@/domain/errors/base.error";
import { NumberValidation } from "@/domain/validations/number.validation";

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

export class TransactionDTO {
  async map(row: ITransactionRowFromCsvProps): Promise<Transaction> {
    return new Promise((resolve, reject) => {
      try {
        const transaction = new Transaction({
          institutionNumber: new NumberValidation(row.nrInst, "nrInst"),
          agencyNumber: new NumberValidation(row.nrAgencia, "nrAgencia"),
          customerId: new NumberValidation(row.cdClient, "cdClient"),
          customerName: row.nmClient,
          document: new Document(row.nrCpfCnpj),
          contractNumber: new NumberValidation(row.nrContrato, "nrContrato"),
          contractDate: convertToDate(row.dtContrato),
          amount: new NumberValidation(row.vlTotal, "nrContrato"),
          productId: new NumberValidation(row.cdProduto, "cdProduto"),
          productDescription: row.dsProduto,
          walletId: new NumberValidation(row.cdCarteira, "cdCarteira"),
          walletDescription: row.dsCarteira,
          proposalNumber: new NumberValidation(row.nrProposta, "nrProposta"),
          installments: new NumberValidation(row.qtPrestacoes, "qtPrestacoes"),
          installmentNumber: new NumberValidation(row.nrPresta, "qtPrestacoes"),
          installmentType: row.tpPresta,
          installmentSequenceNumber: new NumberValidation(
            row.nrSeqPre,
            "nrSeqPre"
          ),
          installmentDueDate: convertToDate(row.dtVctPre),
          installmentValue: new NumberValidation(row.vlPresta, "vlPresta"),
          latePaymentInterestValue: new NumberValidation(row.vlMora, "vlMora"),
          fineValue: new NumberValidation(row.vlMulta, "vlMulta"),
          otherChargesValue: new NumberValidation(row.vlOutAcr, "vlOutAcr"),
          iofValue: new NumberValidation(row.vlIof, "vlIof"),
          discountValue: new NumberValidation(row.vlDescon, "vlDescon"),
          currentValue: new NumberValidation(row.vlAtual, "vlAtual"),
          situationId: row.idSituac,
          salesSituationId: row.idSitVen,
          isValidPayment: false,
        });

        resolve(transaction);
      } catch (errors) {
        if (Array.isArray(errors)) {
          const reasons = errors.map((error: BaseError) => error.message);

          reject(reasons);
        }
      }
    });
  }
}
