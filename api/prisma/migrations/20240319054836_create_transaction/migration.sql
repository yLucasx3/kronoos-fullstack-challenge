-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "institutionNumber" INTEGER NOT NULL,
    "agencyNumber" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,
    "customerName" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "contractNumber" INTEGER NOT NULL,
    "contractDate" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "productId" INTEGER NOT NULL,
    "productDescription" TEXT NOT NULL,
    "walletId" INTEGER NOT NULL,
    "walletDescription" TEXT NOT NULL,
    "proposalNumber" INTEGER NOT NULL,
    "installments" INTEGER NOT NULL,
    "installmentNumber" INTEGER NOT NULL,
    "installmentType" TEXT NOT NULL,
    "installmentSequenceNumber" INTEGER NOT NULL,
    "installmentDueDate" TIMESTAMP(3) NOT NULL,
    "installmentValue" DOUBLE PRECISION NOT NULL,
    "latePaymentInterestValue" DOUBLE PRECISION NOT NULL,
    "fineValue" DOUBLE PRECISION NOT NULL,
    "otherChargesValue" DOUBLE PRECISION NOT NULL,
    "iofValue" DOUBLE PRECISION NOT NULL,
    "discountValue" DOUBLE PRECISION NOT NULL,
    "currentValue" DOUBLE PRECISION NOT NULL,
    "situationId" TEXT NOT NULL,
    "salesSituationId" TEXT NOT NULL,
    "isValidPayment" BOOLEAN NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FailedTransaction" (
    "id" TEXT NOT NULL,
    "transactionData" JSONB NOT NULL,
    "reasons" TEXT[],
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FailedTransaction_pkey" PRIMARY KEY ("id")
);
