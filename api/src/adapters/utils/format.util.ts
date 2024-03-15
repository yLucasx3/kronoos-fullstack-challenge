export const currency = (value: string): number => {
  const numberToFormat = Number(value) ?? value;

  const intl = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return Number(intl.format(numberToFormat));
};

export const convertToDate = (dateString: string): Date => {
  const year = dateString.substring(0, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);

  return new Date(`${year}-${month}-${day}`);
};

export const convertToFloat = (toConvert: string): number => {
  return parseFloat(toConvert.replace(/\./g, ""));
};
