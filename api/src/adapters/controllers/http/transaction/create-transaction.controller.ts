import { IHttpControllerContract } from "@/adapters/contracts/http/controller.contract";
import { IHttpRequestContract } from "@/adapters/contracts/http/request.contract";
import { IHttpResponseContract } from "@/adapters/contracts/http/response.contract";
import {
  CreateTransactionRequestDTO,
  CreateTransactionResponseDTO,
} from "@/adapters/dtos/create-transaction.dto";
import { created, handleError } from "@/adapters/helpers/http.helper";
import { CreateTransactionUseCase } from "@/usecases/transaction/create-transaction.usecase";

export class CreateTransactionController implements IHttpControllerContract {
  constructor(private createTransactionUseCase: CreateTransactionUseCase) {}

  async handle(request: IHttpRequestContract): Promise<IHttpResponseContract> {
    try {
      const bodyDto = new CreateTransactionRequestDTO().map(request.body);

      const newTransaction = await this.createTransactionUseCase.execute(
        bodyDto
      );

      const response = new CreateTransactionResponseDTO().map(newTransaction);

      return created(response);
    } catch (error) {
      return handleError(error);
    }
  }
}
