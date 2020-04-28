function formatValue(value: number | string): string {
  const parsedValue = typeof value === 'number' ? value : parseFloat(value);
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(parsedValue);
}

export default formatValue;
