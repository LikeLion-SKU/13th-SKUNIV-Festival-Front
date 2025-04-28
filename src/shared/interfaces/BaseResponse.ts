interface BaseResponse<T> {
  success: boolean;
  code: number;
  messageg: string;
  data: T;
}

export default BaseResponse;
