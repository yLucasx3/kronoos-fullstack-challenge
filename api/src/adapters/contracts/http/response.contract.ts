export interface IHttpResponseContract<D = any> {
  statusCode: number;
  data?: D;
}
