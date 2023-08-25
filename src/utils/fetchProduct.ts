export interface Produto {
  id: number
  nome: string
  preco: number
  sabores?: string[]
  sabor?: string
  fotos?: string[]
  foto?: string
  descricao?: string
}

export async function getProductById(id: number): Promise<Produto> {
  const response = await fetch(`http://localhost:3333/produto/${id}`)

  if (!response.ok) {
    throw new Error("failed to fetch product")
  }

  return response.json()
}

export async function getAllProducts(): Promise<Produto[]> {
  const response = await fetch(`http://localhost:3333/produto`)

  if (!response.ok) {
    throw new Error("failed to fetch product")
  }

  return response.json()
}
