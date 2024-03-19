"use client";

import { ITransactionAPIResponse } from "@/types/transaction.type";
import { TransactionsDataTable } from "./transactions-datatable";
import { columns } from "./transactions-datatable/transactions-datatable-columns";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import {
  setPageInfos,
  setTransactions,
} from "@/redux/features/transaction-slice";
import { getTransactions } from "@/app/actions";
import { transactionRequestInfo } from "@/utils/constants";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface ITransactionListProps {
  paginatedTransaction: ITransactionAPIResponse;
}

const { transactionsLimit, trasactionsOffset } = transactionRequestInfo;

const TransactionList = ({ paginatedTransaction }: ITransactionListProps) => {
  const [offset, setOffset] = useState(trasactionsOffset);
  const [limit, _setLimit] = useState(transactionsLimit);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { transactions, isUploaded } = useAppSelector(
    (state) => state.transactionReducer
  );

  const dispatch = useAppDispatch();

  const fetchTransactions = async () => {
    const fetchedTransactions = await getTransactions(offset, limit);

    if (fetchedTransactions) {
      const { items: transactions, pageInfos } = fetchedTransactions;

      dispatch(setTransactions(transactions));
      dispatch(setPageInfos(pageInfos));
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [offset, isUploaded]);

  useEffect(() => {
    dispatch(setTransactions(paginatedTransaction.items));
    dispatch(setPageInfos(paginatedTransaction.pageInfos));
  }, [searchParams]);

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);

    fetchTransactions();
  });

  return (
    <TransactionsDataTable
      data={transactions}
      columns={columns}
      onNextPage={() => setOffset((prev) => (prev += transactionsLimit))}
      onPreviousPage={() => setOffset((prev) => (prev -= transactionsLimit))}
      handleSearch={(value) => handleSearch(value)}
    />
  );
};

export default TransactionList;
