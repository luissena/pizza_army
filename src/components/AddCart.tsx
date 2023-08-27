"use client"
import { Product } from "@/services/prisma"
import { Item, useCartStore } from "@/stores/useCartStore"
import { formatCurrency } from "@/utils/formatCurrency"
import { Button } from "@nextui-org/button"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { BsFillDashCircleFill, BsPlusCircleFill } from "react-icons/bs"

export const AddCart = ({ product }: { product: Product }) => {
  const router = useRouter()

  const [quantity, setQuantity] = useState(0)

  const addToCart = useCartStore((state) => state.addToCart)

  const handleQuantity = (operation: string) => {
    if (operation === "increment") {
      setQuantity((prevQuantity) => prevQuantity + 1)
    } else {
      if (quantity === 0) return
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  const item: Item = {
    product,
    quantity,
  }

  const handleAddToCart = () => {
    addToCart(item)
    router.push("/cart")
  }

  return (
    <>
      <div className="flex justify-between items-center mx-6 lg:mx-0">
        <div className="flex items-center gap-3 ">
          <BsFillDashCircleFill
            fill={quantity < 1 ? "#E2E2E2" : "red"}
            onClick={() => handleQuantity("decrement")}
            className={
              quantity < 1
                ? "cursor-not-allowed text-3xl"
                : "cursor-pointer text-3xl"
            }
          />
          <span>{quantity}</span>
          <BsPlusCircleFill
            onClick={() => handleQuantity("increment")}
            className="text-3xl cursor-pointer"
            fill="#1F6D29"
          />
        </div>
        <div className=" text-lg font-light select-none">
          Subtotal:{" "}
          <span className="font-bold">
            {formatCurrency(product.price * quantity)}
          </span>
        </div>
      </div>

      <Button
        onClick={handleAddToCart}
        disabled={quantity < 1}
        className="mt-2 mb-5 font-['Bebas_Neue'] text-sm leading-3 tracking-[0.72px] bg-[#FFB521] w-full"
      >
        ADICIONAR AO CARRINHO
      </Button>
    </>
  )
}
