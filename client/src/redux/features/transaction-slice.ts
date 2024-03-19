import { ITransactionProps } from "@/types/transaction.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IPageInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

interface ITransactionState {
  transactions: ITransactionProps[];
  isUploaded: boolean;
  pageInfos: IPageInfo;
}

const initialState: ITransactionState = {
  transactions: [],
  isUploaded: false,
  pageInfos: {
    currentPage: 0,
    totalItems: 0,
    totalPages: 0,
  },
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransactions: (state, action: PayloadAction<ITransactionProps[]>) => {
      state.transactions = action.payload;
    },
    setPageInfos: (state, action: PayloadAction<IPageInfo>) => {
      state.pageInfos = action.payload;
    },
    toggleIsUploaded: (state) => {
      state.isUploaded = !state.isUploaded;
    },
  },
});

export const { setTransactions, setPageInfos, toggleIsUploaded } =
  transactionSlice.actions;

export default transactionSlice.reducer;
