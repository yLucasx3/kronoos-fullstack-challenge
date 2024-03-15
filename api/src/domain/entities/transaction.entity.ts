import { Document } from "../validations/document.validation";
import { BaseEntity } from "./base.entity";

export interface ITransactionProps {
  institutionNumber: number;
  agencyNumber: number;
  customerId: number;
  customerName: string;
  document: Document;
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

export class Transaction extends BaseEntity<ITransactionProps> {
  constructor(props: ITransactionProps, id?: string) {
    super(props, id);
  }

  get institutionNumber(): number {
    return this.props.institutionNumber;
  }

  get agencyNumber(): number {
    return this.props.agencyNumber;
  }

  get customerId(): number {
    return this.props.customerId;
  }

  get customerName(): string {
    return this.props.customerName;
  }

  get document(): Document {
    return this.props.document;
  }

  get contractNumber(): number {
    return this.props.contractNumber;
  }

  get contractDate(): Date {
    return this.props.contractDate;
  }

  get amount(): number {
    return this.props.amount;
  }

  get productId(): number {
    return this.props.productId;
  }

  get productDescription(): string {
    return this.props.productDescription;
  }

  get walletId(): number {
    return this.props.walletId;
  }

  get walletDescription(): string {
    return this.props.walletDescription;
  }

  get proposalNumber(): number {
    return this.props.proposalNumber;
  }

  get installments(): number {
    return this.props.installments;
  }
  get installmentNumber(): number {
    return this.props.installmentNumber;
  }

  get installmentType(): string {
    return this.props.installmentType;
  }

  get installmentSequenceNumber(): number {
    return this.props.installmentSequenceNumber;
  }

  get installmentDueDate(): Date {
    return this.props.installmentDueDate;
  }

  get installmentValue(): number {
    return this.props.installmentValue;
  }

  get latePaymentValue(): number {
    return this.props.latePaymentValue;
  }

  get fineValue(): number {
    return this.props.fineValue;
  }

  get otherChargesValue(): number {
    return this.props.otherChargesValue;
  }

  get iofValue(): number {
    return this.props.iofValue;
  }

  get discountValue(): number {
    return this.props.discountValue;
  }

  get currentValue(): number {
    return this.props.currentValue;
  }

  get situationId(): string {
    return this.props.situationId;
  }

  get salesSituationId(): string {
    return this.props.salesSituationId;
  }
}
