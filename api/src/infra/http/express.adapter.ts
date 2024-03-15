import { Request, Response } from "express";
import { IHttpControllerContract } from "@/adapters/contracts/http/controller.contract";

export const expressAdapter = (controller: IHttpControllerContract) => {
  return async (request: Request, response: Response) => {
    const httpResponse = await controller.handle({
      body: request?.body,
      params: request?.params,
      query: request?.query,
      file: request?.file,
    });

    return response.status(httpResponse.statusCode).send(httpResponse.data);
  };
};
