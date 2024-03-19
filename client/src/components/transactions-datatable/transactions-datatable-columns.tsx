"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ITransactionProps } from "@/types/transaction.type";
import { formatDate } from "@/formatters/date";
import { toCurrency } from "@/formatters/currency";
import { formatDocument } from "@/formatters/document";

export const columns: ColumnDef<ITransactionProps>[] = [
  { accessorKey: "institutionNumber", header: "Institution Number" },
  { accessorKey: "agencyNumber", header: "Agency Number" },
  { accessorKey: "customerId", header: "Customer ID" },
  { accessorKey: "customerName", header: "Customer Name" },
  {
    accessorKey: "document",
    header: "Document (CNPJ/CPF)",
    cell: ({ row }) => {
      const document = row.getValue("document");

      const formatted = formatDocument(document as string);

      return <div className="text-right">{formatted}</div>;
    },
  },
  { accessorKey: "contractNumber", header: "Contract Number" },
  {
    accessorKey: "isValidPayment",
    header: "Valid Payment",
    cell: ({ row }) => {
      const isValidPayment = row.getValue("isValidPayment");

      if (isValidPayment) return <span className="text-right">✅</span>;

      return <span className="text-right">❌</span>;
    },
  },
  {
    accessorKey: "contractDate",
    header: "Contract Date",
    cell: ({ row }) => {
      const contractDate = row.getValue("contractDate");

      const formatted = formatDate(new Date(contractDate as string));

      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = row.getValue("amount");

      const formatted = toCurrency(amount as number);

      return <div className="text-right">{formatted}</div>;
    },
  },
  { accessorKey: "productId", header: "Product ID" },
  { accessorKey: "productDescription", header: "Product Description" },
  { accessorKey: "walletId", header: "Wallet ID" },
  { accessorKey: "walletDescription", header: "Wallet Description" },
  { accessorKey: "proposalNumber", header: "Proposal Number" },
  { accessorKey: "installments", header: "Installments" },
  { accessorKey: "installmentNumber", header: "Installment Number" },
  { accessorKey: "installmentType", header: "Installment Type" },
  {
    accessorKey: "installmentSequenceNumber",
    header: "Installment Sequence Number",
  },
  {
    accessorKey: "installmentDueDate",
    header: "Installment Due Date",
    cell: ({ row }) => {
      const installmentDueDate = row.getValue("installmentDueDate");

      const formatted = formatDate(new Date(installmentDueDate as string));

      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    accessorKey: "installmentValue",
    header: "Installment Value",
    cell: ({ row }) => {
      const installmentValue = row.getValue("installmentValue");

      const formatted = toCurrency(installmentValue as number);

      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    accessorKey: "latePaymentInterestValue",
    header: "Late Payment Interest Value",
    cell: ({ row }) => {
      const latePaymentInterestValue = row.getValue("latePaymentInterestValue");

      const formatted = toCurrency(latePaymentInterestValue as number);

      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    accessorKey: "fineValue",
    header: "Fine Value",
    cell: ({ row }) => {
      const fineValue = row.getValue("fineValue");

      const formatted = toCurrency(fineValue as number);

      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    accessorKey: "otherChargesValue",
    header: "Other Charges Value",
    cell: ({ row }) => {
      const otherChargesValue = row.getValue("otherChargesValue");

      const formatted = toCurrency(otherChargesValue as number);

      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    accessorKey: "iofValue",
    header: "IOF Value",
    cell: ({ row }) => {
      const iofValue = row.getValue("iofValue");

      const formatted = toCurrency(iofValue as number);

      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    accessorKey: "discountValue",
    header: "Discount Value",
    cell: ({ row }) => {
      const discountValue = row.getValue("discountValue");

      const formatted = toCurrency(discountValue as number);

      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    accessorKey: "currentValue",
    header: "Discount Value",
    cell: ({ row }) => {
      const currentValue = row.getValue("currentValue");

      const formatted = toCurrency(currentValue as number);

      return <div className="text-right">{formatted}</div>;
    },
  },
  { accessorKey: "situationId", header: "Situation ID" },
  { accessorKey: "salesSituationId", header: "Sales Situation ID" },
];
