export async function getOrders() {
  return await fetch(
    'https://api.mercadolibre.com/sites/MLB/search?category=MLB114675&limit=15')
    .then(res => res.json());
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
