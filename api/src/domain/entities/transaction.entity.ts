import { Document } from "../validations/document.validation";
import { NumberValidation } from "../validations/number.validation";
import { BaseEntity } from "./base.entity";

export interface ITransactionProps {
  institutionNumber: NumberValidation;
  agencyNumber: NumberValidation;
  customerId: NumberValidation;
  customerName: string;
  document: Document;
  contractNumber: NumberValidation;
  contractDate: Date;
  amount: NumberValidation;
  productId: NumberValidation;
  productDescription: string;
  walletId: NumberValidation;
  walletDescription: string;
  proposalNumber: NumberValidation;
  installments: NumberValidation;
  installmentNumber: NumberValidation;
  installmentType: string;
  installmentSequenceNumber: NumberValidation;
  installmentDueDate: Date;
  installmentValue: NumberValidation;
  latePaymentInterestValue: NumberValidation;
  fineValue: NumberValidation;
  otherChargesValue: NumberValidation;
  iofValue: NumberValidation;
  discountValue: NumberValidation;
  currentValue: NumberValidation;
  situationId: string;
  salesSituationId: string;
  isValidPayment: boolean;
}

export class Transaction extends BaseEntity<ITransactionProps> {
  constructor(props: ITransactionProps, id?: string) {
    super(props, id);

    this.props.isValidPayment = this.validatePayment();
  }

  validatePayment(): boolean {
    const {
      amount,
      installmentNumber,
      installmentValue,
      latePaymentInterestValue,
      fineValue,
      otherChargesValue,
      currentValue,
    } = this.props;

    const monthlyPayment = amount.value / installmentNumber.value;
    const aditionalValues =
      fineValue.value + latePaymentInterestValue.value + otherChargesValue;

    return (
      Math.trunc(monthlyPayment) + installmentValue.value + aditionalValues !==
      currentValue
    );
  }

  get institutionNumber(): NumberValidation {
    return this.props.institutionNumber;
  }

  get agencyNumber(): NumberValidation {
    return this.props.agencyNumber;
  }

  get customerId(): NumberValidation {
    return this.props.customerId;
  }

  get customerName(): string {
    return this.props.customerName;
  }

  get document(): Document {
    return this.props.document;
  }

  get contractNumber(): NumberValidation {
    return this.props.contractNumber;
  }

  get contractDate(): Date {
    return this.props.contractDate;
  }

  get amount(): NumberValidation {
    return this.props.amount;
  }

  get productId(): NumberValidation {
    return this.props.productId;
  }

  get productDescription(): string {
    return this.props.productDescription;
  }

  get walletId(): NumberValidation {
    return this.props.walletId;
  }

  get walletDescription(): string {
    return this.props.walletDescription;
  }

  get proposalNumber(): NumberValidation {
    return this.props.proposalNumber;
  }

  get installments(): NumberValidation {
    return this.props.installments;
  }
  get installmentNumber(): NumberValidation {
    return this.props.installmentNumber;
  }

  get installmentType(): string {
    return this.props.installmentType;
  }

  get installmentSequenceNumber(): NumberValidation {
    return this.props.installmentSequenceNumber;
  }

  get installmentDueDate(): Date {
    return this.props.installmentDueDate;
  }

  get installmentValue(): NumberValidation {
    return this.props.installmentValue;
  }

  get latePaymentInterestValue(): NumberValidation {
    return this.props.latePaymentInterestValue;
  }

  get fineValue(): NumberValidation {
    return this.props.fineValue;
  }

  get otherChargesValue(): NumberValidation {
    return this.props.otherChargesValue;
  }

  get iofValue(): NumberValidation {
    return this.props.iofValue;
  }

  get discountValue(): NumberValidation {
    return this.props.discountValue;
  }

  get currentValue(): NumberValidation {
    return this.props.currentValue;
  }

  get situationId(): string {
    return this.props.situationId;
  }

  get salesSituationId(): string {
    return this.props.salesSituationId;
  }

  get isValidPayment(): boolean {
    return this.props.isValidPayment;
  }
}
