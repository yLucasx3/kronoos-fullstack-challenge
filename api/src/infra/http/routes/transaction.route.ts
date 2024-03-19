import multer from "multer";
import { Router } from "express";
import { expressAdapter } from "../express.adapter";
import { uploadTransactionFromCSVFactory } from "@/infra/factories/upload-transactions-from-csv.factory";
import { listTransactionsFactory } from "@/infra/factories/list-transactions.factory";
import { createTransactionFactory } from "@/infra/factories/create-transaction.factory";

const upload = multer();

const transactionRoutes = (router: Router) => {
  router.post(
    "/transactions/upload-csv",
    upload.single("file"),
    expressAdapter(uploadTransactionFromCSVFactory)
  );

  router.get("/transactions", expressAdapter(listTransactionsFactory));

  router.post("/transactions", expressAdapter(createTransactionFactory));
};

export default transactionRoutes;
