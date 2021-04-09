export const { format: formatPrice } = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const { format: formatDate } = Intl.DateTimeFormat('pt-BR');
