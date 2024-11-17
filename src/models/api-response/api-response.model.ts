export interface ApiResponseModel<T> {
  statusCode: number;
  data?: T;
  message?: string;
}
