
export class AppPaginationRequest<T> {
  filter: T = {} as T;
  offset: number = 1;
  limit: number = 10;

  static generate<T>(): AppPaginationRequest<T> {
    return {
      filter: {} as T,
      offset: 1,
      limit: 10,
    } as AppPaginationRequest<T>
  }
}
