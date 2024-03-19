"use server";

import { enviroment } from "@/server/enviroment";
import { ITransactionAPIResponse } from "@/types/transaction.type";

export const getTransactions = async (
  offset: number,
  limit: number,
  query?: string
) => {
  try {
    let url = `${enviroment.apiUrl}/transactions?offset=${offset}&limit=${limit}`;

    if (query) url += `&filter[customerName]=${query}`;

    const response = await fetch(url);

    const transactions = await response.json();

    return transactions as ITransactionAPIResponse;
  } catch (error) {
    console.log(error);
  }
};
