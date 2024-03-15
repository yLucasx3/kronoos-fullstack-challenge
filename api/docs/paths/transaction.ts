export const transactionPaths = {
  "/transactions": {
    post: {
      summary: "Create a transaction",
      description: "Create a transaction",
      tags: ["Transaction"],
      produces: ["application/json"],
      responses: {
        200: {
          description: "Successful operation",
        },
        400: {
          description: "Empty transaction",
        },
      },
    },
  },
};
