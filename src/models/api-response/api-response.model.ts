export interface ApiResponseModel<T> {
  statusCode: number;
  data?: T;
  error?: string;
  message?: string;
}
