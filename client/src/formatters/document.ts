export const formatDocument = (document: string) => {
  const isCPF = document.length === 11;

  if (isCPF) {
    return formatCPF(document);
  }

  return formatCNPJ(document);
};

const formatCPF = (cpf: string) => {
  const formatted = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  return formatted;
};

const formatCNPJ = (cnpj: string) => {
  const formatted = cnpj.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    "$1.$2.$3/$4-$5"
  );

  return formatted;
};
