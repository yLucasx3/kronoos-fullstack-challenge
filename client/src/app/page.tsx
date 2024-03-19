import { getTransactions } from "./actions";
import TransactionList from "@/components/transaction-list";
import { transactionRequestInfo } from "@/utils/constants";

const { transactionsLimit, trasactionsOffset } = transactionRequestInfo;

const Home = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    offset?: string;
    limit?: string;
  };
}) => {
  const query = searchParams?.query;
  const offset = Number(searchParams?.offset) || trasactionsOffset;
  const limit = Number(searchParams?.limit) || transactionsLimit;

  const paginatedTransaction = await getTransactions(offset, limit, query);

  if (!paginatedTransaction) return null;

  return (
    <main className="container mx-auto w-full">
      <TransactionList paginatedTransaction={paginatedTransaction} />
    </main>
  );
};

export default Home;
