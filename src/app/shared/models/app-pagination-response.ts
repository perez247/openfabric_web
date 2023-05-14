
export class AppPaginationResponse<T> {
  results?: T;
  totalItems: number = 0;

  static generate<T>(initialValue: T): AppPaginationResponse<T> {
    return {
      results: initialValue,
      totalItems: 0
    } as AppPaginationResponse<T>
  }
}
