import { PrismaClient } from "@prisma/client"

export interface Product {
  id: string
  name: string
  price: number
  description: string
  photos: {
    id: string
    url: string
  }[]
}

const prisma = new PrismaClient()

export async function getProductById(id: string) {
  const product = await prisma.product.findUnique({
    where: { id },
    include: { photos: true },
  })

  if (!product) {
    throw new Error("product not found")
  }

  return product
}

export async function getAllProducts() {
  const products = await prisma.product.findMany({
    include: { photos: true },
  })

  return products
}
