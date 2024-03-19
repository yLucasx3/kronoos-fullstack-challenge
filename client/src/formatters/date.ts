export const formatDate = (date: Date) => {
  const intl = new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" });

  return intl.format(date);
};
