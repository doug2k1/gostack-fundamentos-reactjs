export function formatDate(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString('pt-BR');
}
