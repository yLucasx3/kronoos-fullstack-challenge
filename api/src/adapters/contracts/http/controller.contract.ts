import { IHttpRequestContract } from "./request.contract";
import { IHttpResponseContract } from "./response.contract";

export interface IHttpControllerContract {
  handle(request: IHttpRequestContract): Promise<IHttpResponseContract>;
}
