export const currency = (value: number): string => {
  const intl = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return intl.format(value);
};
