import { Router } from "express";
import { setupDocs } from "../../../../docs";

const docsRoutes = (router: Router): void => {
  router.use("/docs", ...setupDocs);
};

export default docsRoutes;
