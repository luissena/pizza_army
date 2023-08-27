import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  const product = await prisma.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      photos: true,
    },
  })

  return NextResponse.json({ product })
}
