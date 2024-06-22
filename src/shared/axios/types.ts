export interface ResponseFormat<T> {
  data: {
    statusCode: number;
    message: string | string[];
    data: T;
    meta?: PageMetaDto;
  };
}
export interface PageMetaDto {
  page: number;
  limit: number;
  offset: number;
  itemCount: number;
  pageCount: number;
}
