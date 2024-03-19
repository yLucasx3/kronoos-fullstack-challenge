export interface IPaginatedRequest {
  limit: number;
  offset: number;
  filter?: Record<string, any>;
  orderBy?: string;
  orderDirection?: "asc" | "desc";
}

export interface IPaginatedResponse<T> {
  items: T[] | null;
  pageInfos: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
  };
}
