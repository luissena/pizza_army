export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-br", {
    currency: "BRL",
    style: "currency",
  }).format(value)
}
