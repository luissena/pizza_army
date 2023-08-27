import { z } from "zod"
import { prisma } from "../lib/prisma"

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

export async function getAllProducts(): Promise<Product[]> {
  const products = await prisma.product.findMany({
    include: { photos: true },
  })

  return products
}

export async function createProduct(product: any): Promise<Product> {
  const createProductSchema = z.object({
    name: z.string(),
    price: z.number().min(1),
    description: z.string(),
    photos: z
      .array(
        z.object({
          url: z.string(),
        })
      )
      .min(4)
      .max(4),
  })
  const { name, description, price, photos } =
    createProductSchema.parse(product)

  const newProduct = await prisma.product.create({
    data: {
      name,
      price,
      description,
      photos: {
        createMany: {
          data: [
            ...photos.map((photo) => ({
              url: photo.url,
            })),
          ],
        },
      },
    },
    include: { photos: true },
  })

  return newProduct
}
