import {
  ITransactionProps,
  Transaction,
} from "@/domain/entities/transaction.entity";
import {
  IPaginatedRequest,
  IPaginatedResponse,
} from "@/domain/shared/paginates-types";

export class ListTransactionsRequestDTO {
  limit: number;
  offset: number;
  filter?: Record<string, any>;
  orderBy?: string;
  orderDirection?: "asc" | "desc";

  map(request: IPaginatedRequest) {
    this.limit = request.limit ? Number(request.limit) : 100;
    this.offset = request.offset ? Number(request.offset) : 0;
    this.filter = request.filter;
    this.orderBy = request.orderBy;
    this.orderDirection = request.orderDirection;

    return this;
  }
}

export class ListTransactionsResponseDTO {
  items: ITransactionProps[];
  pageInfos: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
  };

  map(
    paginatedResponse: IPaginatedResponse<Transaction>
  ): ListTransactionsResponseDTO {
    this.items =
      paginatedResponse.items?.map((transaction) => ({
        id: transaction.id,
        ...transaction.props,
      })) || [];

    this.pageInfos = {
      currentPage: paginatedResponse.pageInfos.currentPage,
      totalItems: paginatedResponse.pageInfos.totalItems,
      totalPages: paginatedResponse.pageInfos.totalPages,
    };

    return this;
  }
}
