export const toCurrency = (number: number) => {
  if (isNaN(number)) {
    throw new Error("Invalid number.");
  }

  const intl = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return intl.format(number);
};
