import swaggerUi from "swagger-ui-express";
import { paths } from "./paths";
import { info } from "./info";

export const setupDocs = [
  swaggerUi.serve,
  swaggerUi.setup({
    ...info,
    tags: [{ name: "Transaction", description: "Transaction description" }],
    paths,
  }),
];
