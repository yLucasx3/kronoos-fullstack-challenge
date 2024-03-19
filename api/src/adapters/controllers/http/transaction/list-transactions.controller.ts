import { IHttpControllerContract } from "@/adapters/contracts/http/controller.contract";
import { IHttpRequestContract } from "@/adapters/contracts/http/request.contract";
import { IHttpResponseContract } from "@/adapters/contracts/http/response.contract";
import {
  ListTransactionsRequestDTO,
  ListTransactionsResponseDTO,
} from "@/adapters/dtos/list-transactions.dto";
import { handleError, ok } from "@/adapters/helpers/http.helper";
import { ListTransactionsUseCase } from "@/usecases/transaction/list-transactions.usecase";

export class ListTransactionsController implements IHttpControllerContract {
  constructor(private listTransactionsUseCase: ListTransactionsUseCase) {}

  async handle(request: IHttpRequestContract): Promise<IHttpResponseContract> {
    try {
      const queryDTO = new ListTransactionsRequestDTO().map(request.query);

      const transactions = await this.listTransactionsUseCase.execute(queryDTO);

      const response = new ListTransactionsResponseDTO().map(transactions);

      return ok(response);
    } catch (error) {
      return handleError(error);
    }
  }
}
