export interface IHttpRequestContract<
  B = any,
  Q = any,
  P = any,
  H = any,
  F = any
> {
  body?: B;
  query?: Q;
  params?: P;
  header?: H;
  file?: F;
}
