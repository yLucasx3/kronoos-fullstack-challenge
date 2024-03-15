import { IHttpControllerContract } from "@/adapters/contracts/http/controller.contract";
import { IHttpRequestContract } from "@/adapters/contracts/http/request.contract";
import { IHttpResponseContract } from "@/adapters/contracts/http/response.contract";
import { created, handleError } from "@/adapters/helpers/http.helper";
import { UploadFileNotProvidedError } from "@/domain/errors/transaction/upload-file-not-provider.error";
import { UploadTransactionsFromCSVUseCase } from "@/usecases/transaction/upload-transactions-from-csv.usecase";

export class UploadTransactionsFromCSVController
  implements IHttpControllerContract
{
  constructor(private usecase: UploadTransactionsFromCSVUseCase) {}

  async handle(request: IHttpRequestContract): Promise<IHttpResponseContract> {
    try {
      const buffer = request.file?.buffer;

      if (!buffer) {
        throw new UploadFileNotProvidedError();
      }

      const isUploaded = await this.usecase.execute(buffer);

      return created({ success: !!isUploaded });
    } catch (error) {
      return handleError(error);
    }
  }
}
