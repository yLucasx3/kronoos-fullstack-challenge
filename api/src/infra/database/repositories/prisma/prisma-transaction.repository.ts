import { Transaction } from "@/domain/entities/transaction.entity";
import { ITransactionRepository } from "@/domain/repositories/transaction.repository";
import { prisma } from "../../configs/prisma";
import { TransactionMapper } from "../mappers/transaction.mapper";
import {
  IPaginatedRequest,
  IPaginatedResponse,
} from "@/domain/shared/paginates-types";

export class PrismaTransactionRepository implements ITransactionRepository {
  async list(
    options: IPaginatedRequest
  ): Promise<IPaginatedResponse<Transaction>> {
    const { offset, limit, orderBy, orderDirection, filter } = options;

    let filterOptions = filter;

    if (filter?.document) {
      filterOptions = { document: filter.docuemnt };
    }

    if (filter?.customerId) {
      filterOptions = { customerId: filter.customerId };
    }

    if (filter?.customerName) {
      filterOptions = { customerName: { contains: filter.customerName } };
    }

    const [transactions, totalItems] = await Promise.all([
      prisma.transaction.findMany({
        skip: offset,
        take: limit,
        ...(filter ? { where: filterOptions } : {}),
        ...(orderBy ? { orderBy: { [orderBy]: orderDirection || "asc" } } : {}),
      }),
      prisma.transaction.count(),
    ]);

    const totalPages = Math.ceil(totalItems / limit);
    const currentPage = Math.floor(offset / limit) + 1;

    return {
      items: transactions.map((tranasction) =>
        TransactionMapper.fromDatabase(tranasction)
      ),
      pageInfos: {
        totalItems,
        totalPages,
        currentPage,
      },
    };
  }

  async show(id: string): Promise<Transaction | null> {
    const findedTransaction = await prisma.transaction.findUnique({
      where: { id },
    });

    if (!findedTransaction) return null;

    return TransactionMapper.fromDatabase(findedTransaction);
  }

  async create(transaction: Transaction): Promise<Transaction> {
    const createdTransaction = await prisma.transaction.create({
      data: TransactionMapper.toDatabase(transaction),
    });

    return TransactionMapper.fromDatabase(createdTransaction);
  }

  async createMany(transactions: Transaction[]): Promise<boolean> {
    const createdTransactions = await prisma.transaction
      .createMany({
        data: transactions.map((transaction) => {
          return TransactionMapper.toDatabase(transaction);
        }),
      })
      .catch((error) => console.log(error));

    return !!createdTransactions;
  }

  async update(
    id: string,
    transaction: Partial<Transaction>
  ): Promise<Transaction> {
    const updatedTransaction = await prisma.transaction.update({
      where: { id },
      data: TransactionMapper.toDatabase(transaction),
    });

    return TransactionMapper.fromDatabase(updatedTransaction);
  }

  async updateMany(
    ids: string[],
    transactions: Partial<Transaction>[]
  ): Promise<boolean> {
    const updatedTransactions = await prisma.transaction.updateMany({
      where: { id: { in: ids } },
      data: transactions.map((transaction) =>
        TransactionMapper.toDatabase(transaction)
      ),
    });

    return !!updatedTransactions.count;
  }

  async delete(id: string): Promise<void> {
    const deletedTransaction = await prisma.transaction.delete({
      where: { id },
    });
    deletedTransaction;
  }

  async deleteMany(ids: string[]): Promise<void> {
    const deletedTransactions = await prisma.transaction.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    deletedTransactions;
  }
}
