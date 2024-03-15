import multer from "multer";
import { Router } from "express";
import { expressAdapter } from "../express.adapter";
import { uploadTransactionFromCSVFactory } from "@/infra/factories/upload-transactions-from-csv.factory";

const upload = multer();

const transactionRoutes = (router: Router) => {
  router.post(
    "/transactions/upload-csv",
    upload.single("file"),
    expressAdapter(uploadTransactionFromCSVFactory)
  );
};

export default transactionRoutes;
