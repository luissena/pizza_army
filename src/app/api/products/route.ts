import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const prisma = new PrismaClient()

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

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany({
    include: {
      photos: true,
    },
  })

  return NextResponse.json({ products })
}
export async function POST(request: NextRequest) {
  const { name, description, price, photos } = createProductSchema.parse(
    await request.json()
  )

  const product = await prisma.product.create({
    data: {
      name,
      description,
      price,
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
    include: {
      photos: true,
    },
  })
  return NextResponse.json(product)
}
